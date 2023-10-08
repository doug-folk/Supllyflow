import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style";
import ButtonPrimary from "../../../components/buttonPrimary";
import ButtonSecondary from "../../../components/buttonSecondary";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

export interface FormDataUser {
  nomeResponsavel: string;
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  ramoAtividade: string;
}

type Navigation = {
  navigate: (value: string, {}: FormDataUser) => void;
};

export function SignUp1() {
  const navigation = useNavigation<Navigation>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataUser>();

  function onSubmit(data: FormDataUser) {
    navigation.navigate("SignUp2", data);
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>Criar uma conta</Text>
          <Text style={styles.subtitle}>
            Criar uma conta para experimentar todas as funcionalidades do
            aplicativo.
          </Text>

          <Controller
            control={control}
            name="nomeResponsavel"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Nome do responsável"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "O nome do responsável é obrigatório" }}
          />
          {errors.nomeResponsavel && (
            <Text style={{ color: "red" }}>
              {errors.nomeResponsavel.message}
            </Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Nome Fantasia"
                onChangeText={onChange}
                style={styles.input}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="nomeFantasia"
            rules={{ required: "O nome fantasia é obrigatório" }}
          />
          {errors.nomeFantasia && (
            <Text style={{ color: "red" }}>{errors.nomeFantasia.message}</Text>
          )}

          <Controller
            control={control}
            name="razaoSocial"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Razão Social"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "A razão social é obrigatória" }}
          />
          {errors.razaoSocial && (
            <Text style={{ color: "red" }}>{errors.razaoSocial.message}</Text>
          )}

          <Controller
            control={control}
            name="cnpj"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputMask
                type={'cnpj'}
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
            name="ramoAtividade"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Ramo de Atividade"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "O ramo de atividade é obrigatório" }}
          />
          {errors.ramoAtividade && (
            <Text style={{ color: "red" }}>{errors.ramoAtividade.message}</Text>
          )}

          <ButtonPrimary title="Próximo" onPress={handleSubmit(onSubmit)} />

          <ButtonSecondary
            title="Já possui uma conta?"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </ScrollView>
  );
}
