import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

export function Products() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Visão</Text>

      <View style={styles.circleValue}>
        <Text style={styles.circleValueText}>R$ 50,00</Text>
      </View>

      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>Produtos</Text>
      </View>

      <TouchableOpacity
        style={styles.products}
        onPress={() => {}}
      >
        <View style={styles.productsRow}>
          <View style={styles.productsRowLeft}>
            <View style={styles.circle} />
            <Text style={styles.productsName}>Produto 1</Text>
          </View>
          <View>
            <Text style={styles.productsName}>R$10,00</Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>

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
}
