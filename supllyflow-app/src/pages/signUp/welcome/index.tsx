import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import logo from "../../../assets/logo2.png";
import ButtonPrimary from "../../../components/buttonPrimary";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../../../contexts/AuthContext";

export interface WelcomeInterface {
    token: string;
}

export function Welcome() {

    const navigation = useNavigation();

    const route = useRoute();
    const paramsData = route.params as WelcomeInterface;
    console.log(paramsData);

    const { saveToken } = useAuth();
    
    async function onPressNext() {
       await saveToken(paramsData.token)
       navigation.reset({index: 0,routes: [{ name: 'bottomNavigationBar' as never }]})
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={ styles.logoContainer} >
                    <Image source={logo} />
                </View>
                <Text style={styles.title}>Olá, Seja bem vindo!</Text>
                <Text style={styles.text}>Agradecemos em demasia pelo cadastro realizado, vamos contribuir profusamente para jornada do seu negócio!!!</Text>
                <ButtonPrimary title="Continuar" onPress={onPressNext} />
            </View>
        </View>
    );
}
