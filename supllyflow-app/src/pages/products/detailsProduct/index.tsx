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
import { api } from "../../../services";
import { useAuth } from "../../../contexts/AuthContext";
import { Product } from "../../../utils/interfaces/product";

type Navigation = {
  navigate: (value: string, { }?: Product) => void;
};

export function DetailsProduct() {
  const navigation = useNavigation<Navigation>();

  const route = useRoute();
  const paramsData = route.params as Product;

  const { getToken } = useAuth();
  const token = getToken();

  function prevPage() {
    navigation.goBack();
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function updateSupplier() {
    navigation.navigate("updateSupplier", paramsData);
  }

  async function deleteSupplier() {
    await api.delete(`supplier/${paramsData.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data);
      toggleModal()
      prevPage();
    })
      .catch((error) => {
        console.error(error);
      });
  }

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
              toggleModal()
            }}
          >
            <MaterialIcons name="delete" size={26} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => updateSupplier()}
          >
            <MaterialIcons name="edit" size={26} color="#ffffff" />
          </TouchableOpacity>

        </View>
      </View>

      <Text style={styles.title}>{paramsData.name}</Text>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Descrição</Text>
          <Text style={styles.itemValue}>{paramsData.description}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Categoria</Text>
          <Text style={styles.itemValue}>{paramsData.category}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Valor</Text>
          <Text style={styles.itemValue}>{paramsData.amount}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.circle} />

        <View>
          <Text style={styles.itemTitle}>Fornecedor</Text>
          <Text style={styles.itemValue}>{paramsData.supplierId}</Text>
        </View>
      </View>

      <Modal visible={isModalVisible} transparent={true}  >
        <View style={styles.modalDeleteContent}>
          <View style={styles.modalDeleteMain}>
            <Text style={styles.titleModalDelete}>Deseja excluir fornecedor?</Text>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
              <TouchableOpacity style={styles.btnYes} onPress={deleteSupplier}>
                <Text style={styles.textBtnYes}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnNo} onPress={toggleModal}>
                <Text style={styles.textBtnYes}>NÃO</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
