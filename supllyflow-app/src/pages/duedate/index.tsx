import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { api } from "../../services";
import { useAuth } from "../../contexts/AuthContext";
import { Product } from "../../utils/interfaces/product";
import { Supplier } from "../../utils/interfaces/supplier";
import { THEME } from "../../theme/theme";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { doubleString, formatDate } from "../../utils/functions/format";
import { addDays, differenceInDays, isBefore } from "date-fns";

type Navigation = {
  navigate: (value: string, {}?: Product) => void;
};

export function DueDate() {
  const navigation = useNavigation<Navigation>();

  const [products, setProducts] = useState<Product[]>([]);
  const [isCarreg, setIsCarreg] = useState<boolean>(false);

  const dateCurrent = new Date();

  const { getToken } = useAuth();
  const token = getToken();

  function calDate(date: Date) {
    const dateF =  new Date(formatDate(date.toString()));
    // const data10DiasFuturo = addDays(dateCurrent, 10);
    // const faltam10Dias = isBefore(data10DiasFuturo, data10DiasFuturo);
    //  const diferencaEmMilissegundos = dateF.getTime() - dateCurrent.getTime();

    // Converte a diferença para dias
    // const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

    // console.log(dateF)

    // Verifica se faltam 10 dias ou menos para o evento
    // return diferencaEmDias <= 10;
  }

  async function getProducts() {
    await api
      .get("/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts(response.data.products);
        setIsCarreg(true);
      
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function prevPage() {
    navigation.goBack();
  }

  useFocusEffect(() => {
    getProducts();
  });

  if (isCarreg) {
    return (
      <SafeAreaView style={styles.body}>
                <View style={styles.appBar}>
          <TouchableOpacity onPress={prevPage}>
            <MaterialIcons
              name="arrow-back-ios"
              color="#fff"
              size={30}
              style={{ marginLeft: 20 }}
            />
          </TouchableOpacity>

         

        </View>
        <View style={styles.circleValue}>
          <Text style={styles.circleValueText}>
            15
          </Text>
        </View>

        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>Validades</Text>
        </View>

        {products.length == 0 ? (
          <View
          >
            <Text style={{ fontSize: 22 }}>Nenhum Produto Cadastrado</Text>
          </View>
        ) : (
          <View></View>
        )}

        <FlatList
          data={products}
          style={{ width: "90%" }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.products}
              onPress={() => {}}
            >
              <View style={styles.productsRow}>
                <View style={styles.productsRowLeft}>
                  <View style={styles.circle} />
                  <Text style={styles.productsName}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.productsName}>
                    {formatDate(item.dueDate.toString())}
                  
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.load}>
        <ActivityIndicator
          size="200"
          color={THEME.COLORS.PRIMARY}
          style={{ alignItems: "center", justifyContent: "center" }}
        />
      </View>
    );
  }
}
