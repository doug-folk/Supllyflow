import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ButtonPrimary from "../../../components/buttonPrimary";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../../services";
import { useAuth } from "../../../contexts/AuthContext";
import { Supplier } from "../../../utils/interfaces/supplier";

export function CreateSupplier() {
  const navigation = useNavigation();

  const { getToken, saveToken } = useAuth();
  const token = getToken();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Supplier>();

  function prevPage() {
    navigation.goBack();
  }

  function onSubmit(data: Supplier) {
    const formData = {
      email: data.email,
      name: data.name,
      reasonSocial: data.reasonSocial,
      telephone: data.telephone,
      cnpj: data.cnpj,
    };

    api
      .post("/supplier", formData, {
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
  }

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
      <Text style={styles.title}>Cadastrar Fornecedor</Text>
      <View style={styles.body}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{ required: "Email é obrigatório" }}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>{errors.email.message}</Text>
        )}

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
              placeholder="Razão Social"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="reasonSocial"
          rules={{ required: "Razão Social é obrigatório" }}
        />
        {errors.reasonSocial && (
          <Text style={{ color: "red" }}>{errors.reasonSocial.message}</Text>
        )}

        <Controller
          control={control}
          name="cnpj"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputMask
              type={"cnpj"}
              placeholder="CNPJ"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          rules={{ required: "O CNPJ é obrigatório" }}
        />
        {errors.cnpj && (
          <Text style={{ color: "red" }}>{errors.cnpj.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="(00)00000-0000"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="phone-pad"
            />
          )}
          name="telephone"
          rules={{ required: "Telefone é obrigatório" }}
        />
        {errors.telephone && (
          <Text style={{ color: "red" }}>{errors.telephone.message}</Text>
        )}

        <View style={styles.containerBtn}>
          <ButtonPrimary title="Cadastrar" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </View>
  );
}
