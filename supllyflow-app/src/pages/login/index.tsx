import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import backgroundImg from "../../assets/background-login.png";
import logo from "../../assets/logo2.png";
import { styles } from "./style";
import ButtonPrimary from "../../components/buttonPrimary";
import ButtonSecondary from "../../components/buttonSecondary";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  email: string;
  password: string;
}

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

   const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.background}
      defaultSource={backgroundImg}
    >

      <View style={ styles.logoContainer} >
        <Image source={logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Seja bem vindo!</Text>
        <Controller
          control={control}
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
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite sua senha"
              onChangeText={onChange}
              style={styles.input}
              onBlur={onBlur}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
          rules={{ required: "Senha é obrigatória" }}
        />
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}

        <TouchableOpacity>
          <Text style={styles.forgotPasswordBtn}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <ButtonPrimary title="Entrar" onPress={handleSubmit(onSubmit)} />

       <ButtonSecondary title="Criar nova conta" onPress={function () {
          navigation.navigate('signUp1' as never);
        } } />
      </View>
    </ImageBackground>
  );
}
