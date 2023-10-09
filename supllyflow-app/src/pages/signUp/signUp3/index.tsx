import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Controller, useForm } from 'react-hook-form';
import { styles } from './style';
import ButtonSecondary from '../../../components/buttonSecondary';
import ButtonPrimary from '../../../components/buttonPrimary';
import { FormDataSignUp2 } from '../signUp2';

export interface FormDataSignUp3 {
  responsibleName: string;
  fantasyName: string;
  reasonSocial: string;
  cnpj: string;
  fieldOfActivity: string;

  city: string;
  cep: string;
  uf: string;
  neighborhood: string;
  road: string;
  number: string;

  email: string;
  password: string;
  cPassword: string;
}

export function SignUp3() {
  const route = useRoute();
  const paramsData = route.params as FormDataSignUp2;
  console.log(paramsData);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSignUp3>();

  function onSubmit(data: FormDataSignUp3) {
    const formData2 : FormDataSignUp3 = {
       responsibleName: paramsData.responsibleName,
      fantasyName: paramsData.fantasyName,
      reasonSocial: paramsData.reasonSocial,
      cnpj: paramsData.cnpj,
      fieldOfActivity: paramsData.fieldOfActivity,
      city: paramsData.city,
      cep: paramsData.cep,
      uf: paramsData.uf,
      neighborhood: paramsData.neighborhood,
      road: paramsData.road,
      number: paramsData.number,
      email: data.email,
      password: data.password,
      cPassword: data.cPassword
    }
    navigation.navigate("welcome" as never);
  }

  function prevPage() {
    navigation.goBack();
  }
    
  return (
    <ScrollView style={styles.background}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>Informe o email e defina a senha</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Email"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "Email é obrigatório" }}
          />
          {errors.email && (
            <Text style={{ color: "red" }}>
              {errors.email.message}
            </Text>
          )}


          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
             <TextInput
                placeholder="Senha"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "A senha é obrigatório" }}
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}

          <Controller
            control={control}
            name="cPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirme a Senha"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "Cofirme a senha" }}
          />
          {errors.cPassword && (
            <Text style={{ color: "red" }}>
              {errors.cPassword.message}
            </Text>
          )
          }

          <ButtonPrimary title="Cadastrar" onPress={handleSubmit(onSubmit)} />

          <ButtonSecondary
            title="Voltar"
            onPress={prevPage}
          />
        </View>
      </View>
    </ScrollView>
  );

}
