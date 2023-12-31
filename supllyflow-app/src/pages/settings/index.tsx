import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { THEME } from "../../theme/theme";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../services";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { User } from "../../utils/interfaces/user";

export function Settings() {
    const navigation = useNavigation();
    const [isCarreg, setIsCarreg] = useState<boolean>(false);
    const [user, setUser] = useState<User[]>([]);

    const { getToken } = useAuth();

    const token = getToken();

    async function getProfileUser() {
        await api
            .get("/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUser(response.data.user);
                setIsCarreg(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
            console.log("AsyncStorage cleared successfully!");
        } catch (error) {
            console.error("Error clearing AsyncStorage:", error);
        }
    };

    function logout() {
        navigation.reset({ index: 0, routes: [{ name: "login" as never }] });
        clearAsyncStorage();
    }

    useFocusEffect(() => {
        getProfileUser();
    });

    if (isCarreg) {
        return (
            <SafeAreaView>
                <View style={styles.appBar}>
                    <Text style={styles.title}>Configurações</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.photo}>
                        <MaterialIcons name="account-circle" size={100} />
                        <Text style={styles.name}>{user[0].fantasyName}</Text>
                    </View>

                    <TouchableOpacity style={styles.itemSettigns}>
                        <View style={{ flexDirection: "row", gap: 6 }}>
                            <MaterialIcons name="account-circle" size={50} />
                            <View>
                                <Text style={styles.textSettings}>Perfil</Text>
                                <Text>Edite suas informações</Text>
                            </View>
                        </View>
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={26}
                            color={THEME.COLORS.PRIMARY}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemSettigns} onPress={logout}>
                        <View style={{ flexDirection: "row", gap: 15, marginLeft: 5 }}>
                            <MaterialIcons name="logout" size={40} />
                            <View>
                                <Text style={styles.textSettings}>Sair</Text>
                                <Text>Volte logo</Text>
                            </View>
                        </View>
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={26}
                            color={THEME.COLORS.PRIMARY}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );

    } else {
        <View style={styles.load}>
            <ActivityIndicator
                size="200"
                color={THEME.COLORS.PRIMARY}
                style={{ alignItems: "center", justifyContent: "center" }}
            />
        </View>
    }
}
