import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ButtonPrimary from "../../../components/buttonPrimary";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  name: string;
}

export function CreateProduct() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigation = useNavigation();

  function prevPage() {
    navigation.goBack();
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

        <View style={styles.containerBtn}>
          <ButtonPrimary title="Cadastrar" onPress={prevPage} />
        </View>
      </View>
    </View>
  );
}
