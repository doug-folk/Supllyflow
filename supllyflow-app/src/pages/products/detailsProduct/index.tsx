import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Supplier } from "../../../utils/interfaces/supplier";
import { styles } from "./style";
import { api } from "../../../services";
import { useAuth } from "../../../contexts/AuthContext";
import { Product } from "../../../utils/interfaces/product";
import { THEME } from "../../../theme/theme";
import { parseISO, format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { formatDate } from "../../../utils/functions/format";
import { UpdateProduct } from "../updateProduct";


type Navigation = {
  navigate: (value: string, { }?: Product) => void;
};

export function DetailsProduct() {
  const navigation = useNavigation<Navigation>();

  const route = useRoute();
  const paramsData = route.params as Product;

  console.log(paramsData)

  const { getToken } = useAuth();
  const token = getToken();

  function prevPage() {
    navigation.goBack();
  }

  const [isModalVisible, setModalVisible] = useState(false);
  const [supplier, setSupplier] = useState<Supplier>()
  const [isCarreg, setIsCarreg] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function updateSupplier() {
    navigation.navigate("updateProduct", paramsData);
  }

  async function deleteProduct() {
    await api.delete(`product/${paramsData.id}`, {
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

  async function getSupplier() {
    await api
      .get(`/supplier/${paramsData.supplierId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSupplier(response.data.supplier[0]);
        console.log(supplier)
        setIsCarreg(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const doubleString = (n: number) : string => {
    const text = n.toFixed(2).toString();
    return text.replace('.', ',');
  };
  
  function clickUpdate() {
    navigation.navigate("updateProduct", paramsData);
  }

  useEffect(() => {
    getSupplier();
  }, []);

  if (isCarreg) {
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
              onPress={() => clickUpdate()}
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
            <Text style={styles.itemTitle}>Valor Unitário</Text>
            <Text style={styles.itemValue}>R$ {doubleString(paramsData.amount)}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.circle} />

          <View>
            <Text style={styles.itemTitle}>Estoque Atual</Text>
            <Text style={styles.itemValue}>{paramsData.stockCurrent}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.circle} />

          <View>
            <Text style={styles.itemTitle}>Estoque Minímo</Text>
            <Text style={styles.itemValue}>{paramsData.stockMin}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.circle} />

          <View>
            <Text style={styles.itemTitle}>Estoque Máximo</Text>
            <Text style={styles.itemValue}>{paramsData.stockMax}</Text>
          </View>
        </View>


        <View style={styles.item}>
          <View style={styles.circle} />

          <View>
            <Text style={styles.itemTitle}>Fornecedor</Text>
            <Text style={styles.itemValue}>{supplier?.name}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.circle} />

          <View>
            <Text style={styles.itemTitle}>Data de Vencimento</Text>
            <Text style={styles.itemValue}>{formatDate(paramsData.dueDate.toString())}</Text>
          </View>
        </View>

        <View style={{flexDirection: "row", gap: 10, marginLeft: 20, marginTop: 20}}>
          <Text style={styles.totalText }>Valor Total:</Text>
          <Text style={styles.valueTotal}>R$ {doubleString(paramsData.amount * parseInt(paramsData.stockCurrent))}</Text>
        </View>

        <Modal visible={isModalVisible} transparent={true}  >
          <View style={styles.modalDeleteContent}>
            <View style={styles.modalDeleteMain}>
              <Text style={styles.titleModalDelete}>Deseja excluir produto?</Text>

              <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                <TouchableOpacity style={styles.btnYes} onPress={deleteProduct}>
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
