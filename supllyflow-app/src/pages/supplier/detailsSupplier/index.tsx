import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Supplier } from "../../../utils/interfaces/supplier";
import { styles } from "./style";

type Navigation = {
  navigate: (value: string, {}?: Supplier) => void;
};

export function DetailsSuppiler() {
  const navigation = useNavigation<Navigation>();

  const route = useRoute();
  const paramsData = route.params as Supplier;

  function prevPage() {
    navigation.goBack();
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={prevPage}>
          <MaterialIcons
            name="arrow-back-ios"
            color="#fff"
            size={30}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>

        <View style={styles.btnsAppBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("updateSupplier" as never);
            }}
          >
            <MaterialIcons name="delete" size={26} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("updateSupplier" as never);
            }}
          >
            <MaterialIcons name="edit" size={26} color="#ffffff" />
          </TouchableOpacity>

        </View>
      </View>

      <Text style={styles.title}>{paramsData.name}</Text>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Telefone</Text>
          <Text style={styles.itemValue}>{paramsData.telephone}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>CNPJ</Text>
          <Text style={styles.itemValue}>{paramsData.cnpj}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Razão Social</Text>
          <Text style={styles.itemValue}>{paramsData.reasonSocial}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Email</Text>
          <Text style={styles.itemValue}>{paramsData.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
