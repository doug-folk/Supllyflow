import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style";
import ButtonPrimary from "../../../components/buttonPrimary";
import ButtonSecondary from "../../../components/buttonSecondary";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

export interface FormDataUser {
  responsibleName: string;
  fantasyName: string;
  reasonSocial: string;
  cnpj: string;
  fieldOfActivity: string;
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

  function prevPage() {
    navigation.goBack();
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
            name="responsibleName"
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
          {errors.responsibleName && (
            <Text style={{ color: "red" }}>
              {errors.responsibleName.message}
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
            name="fantasyName"
            rules={{ required: "O nome fantasia é obrigatório" }}
          />
          {errors.fantasyName && (
            <Text style={{ color: "red" }}>{errors.fantasyName.message}</Text>
          )}

          <Controller
            control={control}
            name="reasonSocial"
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
          {errors.reasonSocial && (
            <Text style={{ color: "red" }}>{errors.reasonSocial.message}</Text>
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
            name="fieldOfActivity"
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
          {errors.fieldOfActivity && (
            <Text style={{ color: "red" }}>{errors.fieldOfActivity.message}</Text>
          )}

          <ButtonPrimary title="Próximo" onPress={handleSubmit(onSubmit)} />

          <ButtonSecondary
            title="Já possui uma conta?"
            onPress={prevPage}
          />
        </View>
      </View>
    </ScrollView>
  );
}
