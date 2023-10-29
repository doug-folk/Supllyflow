import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export function DetailsSuppiler() {
  const navigation = useNavigation();

  function prevPage() {
    navigation.goBack();
  }

  return (
    <View>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={prevPage}>
          <MaterialIcons
            name="arrow-back-ios"
            color="#fff"
            size={30}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  navigation.navigate('updateSupplier' as never)
        }}>
          <Text style={styles.editTextBtn}>Editar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Nome Fornecedor</Text>
      <View>
        <Text>Telefone</Text>
        <Text>88 99347 - 6747</Text>
      </View>

      <View>
        <Text>CNPJ</Text>
        <Text>029.2029.2922-9098</Text>
      </View>

      <View>
        <Text>Razão Social</Text>
        <Text>Fornecedor Fazao social</Text>
      </View>

      <View>
        <Text>Email</Text>
        <Text>fornecedor@gmail.com</Text>
      </View>
    </View>
  );
}
