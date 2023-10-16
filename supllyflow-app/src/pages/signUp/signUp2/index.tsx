import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { FormDataUser } from '../signUp1';
import { Controller, useForm } from 'react-hook-form';
import { styles } from './style';
import ButtonSecondary from '../../../components/buttonSecondary';
import ButtonPrimary from '../../../components/buttonPrimary';

export interface FormDataSignUp2 {
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
}

type Navigation  = {
  navigate: (value: string, {}: FormDataSignUp2) => void;
};

export function SignUp2() {
  const route = useRoute();
  const paramsData = route.params as FormDataUser;
  console.log(paramsData);
   const navigation = useNavigation<Navigation>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSignUp2>();

  function onSubmit(data: FormDataSignUp2) {
    const formData2 : FormDataSignUp2 = {
      responsibleName: paramsData.responsibleName,
      fantasyName: paramsData.fantasyName,
      reasonSocial: paramsData.reasonSocial,
      cnpj: paramsData.cnpj,
      fieldOfActivity: paramsData.fieldOfActivity,
      city: data.city,
      cep: data.cep,
      uf: data.uf,
      neighborhood: data.neighborhood,
      road: data.road,
      number: data.number
    }
    navigation.navigate("SignUp3", formData2);
  }

  function prevPage() {
    navigation.goBack();
  }
    
  return (
    <ScrollView style={styles.background}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>Qual seu endereço?</Text>
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Cidade"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "Cidade é obrigatório" }}
          />
          {errors.city && (
            <Text style={{ color: "red" }}>
              {errors.city.message}
            </Text>
          )}


          <Controller
            control={control}
            name="cep"
            render={({ field: { onChange, onBlur, value } }) => (
             <TextInput
                placeholder="CEP"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "O CEP é obrigatório" }}
          />
          {errors.cep && (
            <Text style={{ color: "red" }}>{errors.cep.message}</Text>
          )}

          <Controller
            control={control}
            name="uf"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="UF"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "UF é obrigatório" }}
          />
          {errors.uf && (
            <Text style={{ color: "red" }}>
              {errors.uf.message}
            </Text>
          )
          }

           <Controller
            control={control}
            name="neighborhood"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Bairro"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "Bairro é obrigatório" }}
          />
          {errors.neighborhood && (
            <Text style={{ color: "red" }}>
              {errors.neighborhood.message}
            </Text>
          )
          }

           <Controller
            control={control}
            name="road"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Rua"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "Rua é obrigatório" }}
          />
          {errors.road && (
            <Text style={{ color: "red" }}>
              {errors.road.message}
            </Text>
          )
          }

           <Controller
            control={control}
            name="number"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Número"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            )}
            rules={{ required: "Número é obrigatório" }}
          />
          {errors.number && (
            <Text style={{ color: "red" }}>
              {errors.number.message}
            </Text>
          )
          }

          <ButtonPrimary title="Próximo" onPress={handleSubmit(onSubmit)} />

          <ButtonSecondary
            title="Voltar"
            onPress={prevPage}
          />
        </View>
      </View>
    </ScrollView>
  );

}
