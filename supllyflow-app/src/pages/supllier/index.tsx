import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

export function Supplier() {
  const navigation = useNavigation();

  function clickPorduct() {
    navigation.navigate("detailsSuppiler" as never);
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.circleValue}>
        <Text style={styles.circleValueText}>10</Text>
        <Text>Fornecedores</Text>
      </View>

      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>Meus Fornecedores</Text>
      </View>

      <TouchableOpacity style={styles.supllier} onPress={clickPorduct}>
        <View style={styles.supllierRow}>
          <View style={styles.supllierRowLeft}>
            <View style={styles.circle} />
            <Text style={styles.supllierName}>Fornecedor 1</Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.supllier} onPress={clickPorduct}>
        <View style={styles.supllierRow}>
          <View style={styles.supllierRowLeft}>
            <View style={styles.circle} />
            <Text style={styles.supllierName}>Fornecedor 1</Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.supllier} onPress={clickPorduct}>
        <View style={styles.supllierRow}>
          <View style={styles.supllierRowLeft}>
            <View style={styles.circle} />
            <Text style={styles.supllierName}>Fornecedor 1</Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.floatingButton} onPress={() => {
        navigation.navigate("createSupplier" as never)
      }}>
        <MaterialIcons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
