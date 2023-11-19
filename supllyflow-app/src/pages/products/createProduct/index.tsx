import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ButtonPrimary from "../../../components/buttonPrimary";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Product } from "../../../utils/interfaces/product";
import { api } from "../../../services";
import { Supplier } from "../../../utils/interfaces/supplier";
import { useAuth } from "../../../contexts/AuthContext";
import RNPickerSelect from "react-native-picker-select";
import { Snackbar } from "react-native-paper";

export function CreateProduct() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState("");
  const [isSelectedSupplier, setIsSelectedSupplier] = useState(false);


  const { getToken } = useAuth();
  const token = getToken();

  const placeholder = {
    label: "Selecione o fornecedor",
    value: null,
    color: "#000",
  };

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  async function getSuppliers() {
    await api
      .get("/supplier", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSuppliers(response.data.suppliers);
        console.log(suppliers);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function prevPage() {
    navigation.goBack();
  }

  function createProduct(data: Product) {
    const formData = {
      name: data.name,
      supplierId: selectedValue,
      description: data.description,
      amount: parseFloat(data.amount),
      category: data.category,
    };

    if (selectedValue.length > 1) {

      api
        .post("/product", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          prevPage();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsSelectedSupplier(true)
    }
  }
  useEffect(() => {
    getSuppliers();
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <View style={styles.area}>
      <TouchableOpacity onPress={prevPage}>
        <MaterialIcons
          name="close"
          color="#000"
          size={30}
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Cadastrar Produto</Text>
      <View style={styles.body}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nome"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="name"
          rules={{ required: "Nome é obrigatório" }}
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Descrição"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="description"
          rules={{ required: "Descrição é obrigatório" }}
        />
        {errors.description && (
          <Text style={{ color: "red" }}>{errors.description.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Categoria"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="category"
          rules={{ required: "Categoria é obrigatório" }}
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Valor"
              keyboardType="numeric"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="amount"
          rules={{ required: "Valor é obrigatório" }}
        />
        {errors.amount && (
          <Text style={{ color: "red" }}>{errors.amount.message}</Text>
        )}

        <View style={{ width: "90%", marginTop: 20 }}>

          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => setSelectedValue(value)}
            items={suppliers.map((item) => ({
              label: item.name,
              value: item.id,
              key: item.id,
            }))}
          />

        </View>

        <View style={styles.containerBtn}>
          <ButtonPrimary title="Cadastrar" onPress={handleSubmit(createProduct)} />
        </View>

        <Snackbar
          visible={isSelectedSupplier}
          style={{ marginTop: 100 }}
          onDismiss={() => setIsSelectedSupplier(false)}
        >
          Senha incorreta, tente novamente!
        </Snackbar>
      </View>
    </View>
  );
}
