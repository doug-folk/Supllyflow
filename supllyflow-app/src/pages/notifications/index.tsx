import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export function Notifications() {
  const navigation = useNavigation();

  function prevPage() {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={prevPage}>
          <MaterialIcons
            name="arrow-back-ios"
            color="#fff"
            size={30}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Notificações</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.msg}>Nenhuma Notificação!</Text>
      </View>
    </SafeAreaView>
  );
}