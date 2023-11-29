import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
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
  const sliceColor = ["#fff", THEME.COLORS.ALERT];
  const sliceColor2 = ["#fff", "#5040A3"];
  const sliceColor3 = ["#fff", "#ECF95E"];

  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);
  const { getToken } = useAuth();
  const token = getToken();
  const [isCarreg, setIsCarreg] = useState<boolean>(false);

  const sumStockCurrent = (): number => {
    const result = products.reduce(
      (soma, item) => soma + parseInt(item.stockCurrent),
      0
    );

    if (result > 0) {
      return result;
    } else {
      return 0;
    }
  };

  const sumStockMin = (): number => {
    const result = products.reduce(
      (soma, item) => soma + parseInt(item.stockMin),
      0
    );

    if (result > 0) {
      return result;
    } else {
      return 0;
    }
  };

  const sumStockMax = (): number => {
    const result = products.reduce(
      (soma, item) => soma + parseInt(item.stockMax),
      0
    );

    if (result > 0) {
      return result;
    } else {
      return 0;
    }
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
        <ScrollView>
          <View style={styles.appBar}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.btnsAppBar}>
              <TouchableOpacity onPress={() => navigation.navigate("notifications" as never)}>
                <MaterialIcons name="notifications-none" size={30} />
              </TouchableOpacity>
                
              <TouchableOpacity onPress={() => navigation.navigate("settings" as never)}>
                <MaterialIcons name="account-circle" size={50} />
              </TouchableOpacity>
                
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.stocks}>
              <Text style={styles.titleProduct}>Meus Produtos</Text>

              <View style={{flexDirection: "row", gap:20, justifyContent: "center"}}>

                  <TouchableOpacity  style={styles.cardStock}>
                {/* <Card style={styles.cardStock}> */}
                <Text style={styles.titleCardStock}>Estoque atual</Text>

                <View style={styles.container}>
                  <View style={styles.elemento1}>
                    {sumStockCurrent() > 0 ? (
                      <PieChart
                        widthAndHeight={widthAndHeight}
                        series={[
                          sumStockCurrent() - sumStockMin(),
                          sumStockCurrent(),
                        ]}
                        sliceColor={sliceColor}
                        coverRadius={0.8}
                        coverFill={THEME.COLORS.GREEN}
                      />
                    ) : (
                      <PieChart
                        widthAndHeight={widthAndHeight}
                        series={[100, 1]}
                        sliceColor={sliceColor}
                        coverRadius={0.8}
                        coverFill={THEME.COLORS.GREEN}
                      />
                    )}
                  </View>

                  <View style={styles.elemento2}>
                    <Text style={styles.chartProduct}>{sumStockCurrent()}</Text>
                  </View>
                </View>
                  {/* </Card>a */}
                  </TouchableOpacity>
              <Card style={styles.cardStock}>
                <Text style={styles.titleCardStock}>Estoque mínimo</Text>

                <View style={styles.container}>
                  <View style={styles.elemento1}>
                    {sumStockMin() > 0 ? (
                      <PieChart
                        widthAndHeight={widthAndHeight}
                        series={[
                          sumStockMin(),
                          sumStockCurrent(),
                        ]}
                        sliceColor={sliceColor2}
                        coverRadius={0.8}
                        coverFill={THEME.COLORS.GREEN}
                      />
                    ) : (
                      <PieChart
                        widthAndHeight={widthAndHeight}
                        series={[100, 1]}
                        sliceColor={sliceColor2}
                        coverRadius={0.8}
                        coverFill={THEME.COLORS.GREEN}
                      />
                    )}
                  </View>

                  <View style={styles.elemento2}>
                    <Text style={styles.chartProduct}>{sumStockMin()}</Text>
                  </View>
                </View>
              </Card>
              <Card style={styles.cardStock}>
                <Text style={styles.titleCardStock}>Estoque máximo</Text>

                <View style={styles.container}>
                  <View style={styles.elemento1}>
                    {
                      sumStockMax() > 0 ?
                      <PieChart
                        widthAndHeight={widthAndHeight}
                          series={[
                            sumStockMax(),
                            sumStockCurrent(),
                        ]}
                        sliceColor={sliceColor3}
                        coverRadius={0.8}
                        coverFill={THEME.COLORS.GREEN}
                        />
                        
                        :

                         <PieChart
                      widthAndHeight={widthAndHeight}
                      series={[100, 1]}
                      sliceColor={sliceColor3}
                      coverRadius={0.8}
                      coverFill={THEME.COLORS.GREEN}
                    />
                        
                    }
                  </View>

                  <View style={styles.elemento2}>
                    <Text style={styles.chartProduct}>{sumStockMax()}</Text>
                  </View>
                </View>
              </Card>

              </View>
            </View>

            <View style={styles.shortcuts}>
                <Text style={styles.titleWork}>Workflow</Text>

              <View style={styles.shortcutsDiv}>
                <TouchableOpacity
                  style={styles.cardShortcut}
                  onPress={() => {
                    navigation.navigate('product' as never); 
                  }}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image source={require("../../assets/archive.png")} />
                  </View>
                  <Text style={styles.titleCardShortcut}>Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardShortcut} onPress={() => navigation.navigate("supplier" as never)}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image source={require("../../assets/supplier.png")} />
                  </View>
                  <Text style={styles.titleCardShortcut}>Fornecedores</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.shortcutsDiv}>
                <TouchableOpacity style={styles.cardShortcut} onPress={() => navigation.navigate('product' as never)}>
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
        </ScrollView>
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
