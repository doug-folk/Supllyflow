import { TextInput, View, Text, TouchableOpacity, Modal } from "react-native";
import ButtonPrimary from "../../../components/buttonPrimary";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Supplier } from "../../../utils/interfaces/supplier";
import { api } from "../../../services";
import { useAuth } from "../../../contexts/AuthContext";

export function UpdateSupplier() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Supplier>();

  
  const route = useRoute();
  const paramsData = route.params as Supplier;

  const id = paramsData.id;

  const navigation = useNavigation();
  
  const { getToken } = useAuth();
  const token = getToken();

  function prevPage() {
    navigation.goBack();
     navigation.goBack();
  }

  function onSubmit(data: Supplier) {
    const formData = {
      id: id,
      email: data.email,
      name: data.name,
      reasonSocial: data.reasonSocial,
      telephone: data.telephone,
      cnpj: data.cnpj,
    };

    console.log(data.id)

    api
      .put("/supplier", formData, {
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
      <MaterialIcons name="close" color="#000" size={30} style={{marginLeft: 20}} />

      </TouchableOpacity>
      <Text style={styles.title}>Editar Fornecedor</Text>
      <View style={styles.body}>
        <Controller
          control={control}
          defaultValue={paramsData.email}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
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
          defaultValue={paramsData.name}

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
          defaultValue={paramsData.reasonSocial}
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
          defaultValue={paramsData.cnpj}
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
          defaultValue={paramsData.telephone}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="(00)00000-0000"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="telephone"
          rules={{ required: "Telefone é obrigatório" }}
        />
        {errors.telephone && (
          <Text style={{ color: "red" }}>{errors.telephone.message}</Text>
        )}

        <View style={styles.containerBtn}>
          <ButtonPrimary title="Salvar" onPress={handleSubmit(onSubmit)} />

        </View>
      </View>
    </View>
  );
}
