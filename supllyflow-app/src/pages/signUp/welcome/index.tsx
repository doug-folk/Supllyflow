import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import logo from "../../../assets/logo2.png";
import ButtonPrimary from "../../../components/buttonPrimary";

export function Welcome() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={ styles.logoContainer} >
                    <Image source={logo} />
                </View>
                <Text style={styles.title}>Olá, Seja bem vindo!</Text>
                <Text style={styles.text}>Agradecemos em demasia pelo cadastro realizado, vamos contribuir profusamente para jornada do seu negócio!!!</Text>
                <ButtonPrimary title="Continuar" onPress={() => {}} />
            </View>
        </View>
    );
}
