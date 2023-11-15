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

export function CreateProduct() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const navigation = useNavigation();

  function prevPage() {
    navigation.goBack();
  }

  const { getToken } = useAuth();
  const token = getToken();

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

  useEffect(() => {
    getSuppliers();
  });

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

        <View style={styles.containerBtn}>
          <ButtonPrimary title="Cadastrar" onPress={prevPage} />
        </View>
      </View>
    </View>
  );
}
