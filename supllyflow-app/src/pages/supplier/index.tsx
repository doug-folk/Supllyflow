import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services";
import { Supplier } from "../../utils/interfaces/supplier";
import { THEME } from "../../theme/theme";

type Navigation = {
  navigate: (value: string, {}?: Supplier) => void;
};

export function SupplierPage() {
  const navigation = useNavigation<Navigation>();

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isCarreg, setIsCarreg] = useState<boolean>(false);

  const { getToken } = useAuth();
  const token = getToken();

  async function init() {
    await api
      .get("/supplier", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSuppliers(response.data.suppliers);
        setIsCarreg(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useFocusEffect(() => {
    init();
  });

  function clickPorduct(supplier: Supplier) {
    navigation.navigate("detailsSuppiler", supplier);
  }

  if (isCarreg) {
    
      return <SafeAreaView style={styles.body}>
        <View style={styles.circleValue}>
          <Text style={styles.circleValueText}>{suppliers.length}</Text>
          <Text>Fornecedores</Text>
        </View>

        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>Meus Fornecedores</Text>
        </View>

         {suppliers.length == 0 ? (
          <View
          >
            <Text style={{ fontSize: 22, marginTop: 20 }}>Nenhum Fornecedor Cadastrado</Text>
          </View>
        ) : (
          <View></View>
        )}


        <FlatList
          data={suppliers}
          style={{ width: "90%" }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.supllier}
              onPress={() => clickPorduct(item)}
              key={index}
            >
              <View style={styles.supllierRow}>
                <View style={styles.supllierRowLeft}>
                  <View style={styles.circle} />
                  <Text style={styles.supllierName}>{item.name}</Text>
                </View>
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate("createSupplier");
          }}
        >
          <MaterialIcons name="add" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </SafeAreaView>
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
