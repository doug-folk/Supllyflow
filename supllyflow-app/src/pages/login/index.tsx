import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import backgroundImg from "../../assets/background-login.png";
import logo from "../../assets/logo2.png";
import { styles } from "./style";
import ButtonPrimary from "../../components/buttonPrimary";
import ButtonSecondary from "../../components/buttonSecondary";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services";
import { Snackbar } from "react-native-paper";

interface FormData {
  email: string;
  password: string;
}

export function Login() {
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const formData = {
      email: data.email,
      password: data.password,
    };

    api
      .post("/auth", formData)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("bottomNavigationBar" as never);
      })
      .catch((error) => {
        setPasswordIncorrect(true);
        console.error(error);
        // Toast.show({ type: "error", text1: 'errada' });
      });
  }

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.background}
      defaultSource={backgroundImg}
    >
      <View style={styles.logoContainer}>
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
              placeholder="Senha"
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

        <ButtonSecondary
          title="Criar nova conta"
          onPress={() => {
            navigation.navigate("signUp1" as never);
          }}
        />
        <Snackbar
          visible={passwordIncorrect}
          style={{ marginTop: 100 }}
          onDismiss={() => setPasswordIncorrect(false)}
        >
          Senha incorreta, tente novamente!
        </Snackbar>
      </View>
    </ImageBackground>
  );
}
