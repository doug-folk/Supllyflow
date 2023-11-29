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
import { doubleString } from "../../utils/functions/format";

type Navigation = {
  navigate: (value: string, {}?: Product) => void;
};

export function Products() {
  const navigation = useNavigation<Navigation>();

  const [products, setProducts] = useState<Product[]>([]);
  const [isCarreg, setIsCarreg] = useState<boolean>(false);
  const [valueTotal, setValueTotal] = useState<Float>(0);

  const { getToken } = useAuth();
  const token = getToken();

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

  const sumProducts = (): number => {
    return products.reduce((soma, item) => soma + (item.amount * parseInt(item.stockCurrent)), 0);
  };

  useFocusEffect(() => {
    getProducts();
  });

  function clickProduct(product: Product) {
    navigation.navigate("detailsProduct", product);
  }

  if (isCarreg) {
    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.circleValue}>
          <Text style={styles.circleValueText}>
            R$ {doubleString(sumProducts())}
          </Text>
        </View>

        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>Produtos</Text>
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
              onPress={() => clickProduct(item)}
            >
              <View style={styles.productsRow}>
                <View style={styles.productsRowLeft}>
                  <View style={styles.circle} />
                  <Text style={styles.productsName}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.productsName}>
                    {/* R$ {doubleString(item.amount * parseInt(item.stockCurrent))} */}
                    {item.stockCurrent} Unidades
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate("createProduct" as never);
          }}
        >
          <MaterialIcons name="add" size={28} color="#FFFFFF" />
        </TouchableOpacity>
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
