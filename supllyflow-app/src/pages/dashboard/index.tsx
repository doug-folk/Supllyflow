import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

import PieChart from "react-native-pie-chart";
import { THEME } from "../../theme/theme";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { api } from "../../services";
import { Product } from "../../utils/interfaces/product";
import { useAuth } from "../../contexts/AuthContext";

export function Dashboard() {
  const widthAndHeight = 90;
  const series = [123, 321];
  const sliceColor = ["#fff", THEME.COLORS.ALERT];
  const series2 = [123, 321];
  const sliceColor2 = ["#fff", "#5040A3"];
  const series3 = [123, 321];
  const sliceColor3 = ["#fff", "#ECF95E"];

  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);
  const { getToken } = useAuth();
  const token = getToken();
  const [isCarreg, setIsCarreg] = useState<boolean>(false);

  const sumStockCurrent = (): number => {
    return products.reduce(
      (soma, item) => soma + parseInt(item.stockCurrent),
      0
    );
  };

  const sumStockMin = (): number => {
    return products.reduce((soma, item) => soma + parseInt(item.stockMin), 0);
  };

  const sumStockMax = (): number => {
    return products.reduce((soma, item) => soma + parseInt(item.stockMax), 0);
  };

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

  useFocusEffect(() => {
    getProducts();
  });

  if (isCarreg) {
    return (
      <SafeAreaView>
        <View style={styles.appBar}>
          <Text style={styles.title}>Dashboard</Text>
          <View style={styles.btnsAppBar}>
            <MaterialIcons name="notifications-none" size={30} />
            <MaterialIcons name="account-circle" size={50} />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.stocks}>
            <Card style={styles.cardStock}>
              <Text style={styles.titleCardStock}>Estoque atual</Text>

              <View style={styles.container}>
                <View style={styles.elemento1}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={[
                      sumStockCurrent(),
                      sumStockMax() - sumStockCurrent(),
                    ]}
                    sliceColor={sliceColor}
                    coverRadius={0.8}
                    coverFill={THEME.COLORS.GREEN}
                  />
                </View>

                <View style={styles.elemento2}>
                  <Text style={styles.chartTitle}>produtos</Text>
                  <Text style={styles.chartProduct}>{sumStockCurrent()}</Text>
                </View>
              </View>
            </Card>
            <Card style={styles.cardStock}>
              <Text style={styles.titleCardStock}>Estoque mínimo</Text>

              <View style={styles.container}>
                <View style={styles.elemento1}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series2}
                    sliceColor={sliceColor2}
                    coverRadius={0.8}
                    coverFill={THEME.COLORS.GREEN}
                  />
                </View>

                <View style={styles.elemento2}>
                  <Text style={styles.chartTitle}>produtos</Text>
                  <Text style={styles.chartProduct}>{sumStockMin()}</Text>
                </View>
              </View>
            </Card>
            <Card style={styles.cardStock}>
              <Text style={styles.titleCardStock}>Estoque máximo</Text>

              <View style={styles.container}>
                <View style={styles.elemento1}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series3}
                    sliceColor={sliceColor3}
                    coverRadius={0.8}
                    coverFill={THEME.COLORS.GREEN}
                  />
                </View>

                <View style={styles.elemento2}>
                  <Text style={styles.chartTitle}>produtos</Text>
                  <Text style={styles.chartProduct}>{sumStockMax()}</Text>
                </View>
              </View>
            </Card>
          </View>

          <View style={styles.shortcuts}>
            <View style={styles.shortcutsDiv}>
              <TouchableOpacity style={styles.cardShortcut} onPress={() => {}}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image source={require("../../assets/archive.png")} />
                </View>
                <Text style={styles.titleCardShortcut}>Produtos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardShortcut}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image source={require("../../assets/supplier.png")} />
                </View>
                <Text style={styles.titleCardShortcut}>Fornecedores</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.shortcutsDiv}>
              <TouchableOpacity style={styles.cardShortcut}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image source={require("../../assets/relatorio.png")} />
                </View>
                <Text style={styles.titleCardShortcut}>Relatórios</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardShortcut}
                onPress={() => {
                  navigation.navigate("dueDate" as never);
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image source={require("../../assets/calendar.png")} />
                </View>
                <Text style={styles.titleCardShortcut}>Vencimentos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
