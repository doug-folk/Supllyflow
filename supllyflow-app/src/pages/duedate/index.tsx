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
  navigate: (value: string, {}: Product) => void;
};

export function DueDate() {
  const navigation = useNavigation<Navigation>();

  const [products, setProducts] = useState<Product[]>([]);
  const [isCarreg, setIsCarreg] = useState<boolean>(false);

  const dateCurrent = new Date();

  const { getToken } = useAuth();
  const token = getToken();

  function calDate(date: Date) {
    const data1 = new Date(date);
    const data2 = new Date();

    const diferencaEmMilissegundos = Math.abs(
      data1.getTime() - data2.getTime()
    );

    const diferencaEmDias = Math.floor(
      diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
    );

    console.log(`A diferença em dias é: ${diferencaEmDias}`);

    if (data1 < data2) {
      console.log("A data 1 é anterior à data 2.");
      return 0;
    }

    if (diferencaEmDias == 0) {
      return 0;
    }
    return diferencaEmDias;
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
        {/* <View style={styles.circleValue}>
          <Text style={styles.circleValueText}>15</Text>
        </View> */}

        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>Vencimentos</Text>
        </View>

        <View style={styles.legendas}>
          <View style={styles.legenda}>
            <View style={styles.circle} />
            <Text style={styles.legendaText}>Longe do vencimento</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.circle3} />
            <Text style={styles.legendaText}>10 dias para o vencimento</Text>
          </View>
          <View style={styles.legenda}>
            <View style={styles.circle2} />
            <Text style={styles.legendaText}>Vencido</Text>
          </View>
        </View>

        {products.length == 0 ? (
          <View>
            <Text style={{ fontSize: 22 }}>Nenhum Produto Cadastrado</Text>
          </View>
        ) : (
          <View></View>
        )}

        <FlatList
          data={products}
          style={{ width: "90%" }}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.products} onPress={() => {}}>
              <View style={styles.productsRow}>
                <View style={styles.productsRowLeft}>
                  <View
                    style={
                      calDate(item.dueDate) > 10
                        ? styles.circle
                        : calDate(item.dueDate) == 0
                        ? styles.circle2
                        : styles.circle3
                    }
                  />
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
