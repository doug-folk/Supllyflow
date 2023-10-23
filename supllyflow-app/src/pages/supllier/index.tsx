import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { modalStyles } from "./style";
import ButtonPrimary from "../../components/buttonPrimary";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services";
import { TextInputMask } from "react-native-masked-text";
import { MaterialIcons } from "@expo/vector-icons";


interface FormData {
  email: string;
  name: string;
  reasonSocial: string;
  telephone: string;
  cnpj: string;
}

export function Supplier() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const formData = {
      email: data.email,
    };

    api
      .post("/auth", formData)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("bottomNavigationBar" as never);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <ButtonPrimary title="Cadastrar Fornecedor" onPress={toggleModal} />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalContent}>
            <MaterialIcons name="close" color="#5AE468" />
            <Text style={modalStyles.title}>Cadastrar Fornecedor</Text>
            <View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={modalStyles.input}
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
                    placeholder="Nome"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={modalStyles.input}
                  />
                )}
                name="name"
                rules={{ required: "Nome é obrigatório" }}
              />
              {errors.name && (
                <Text style={{ color: "red" }}>{errors.name.message}</Text>
              )}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Razão Social"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={modalStyles.input}
                  />
                )}
                name="reasonSocial"
                rules={{ required: "Razão Social é obrigatório" }}
              />
              {errors.reasonSocial && (
                <Text style={{ color: "red" }}>
                  {errors.reasonSocial.message}
                </Text>
              )}

              <Controller
                control={control}
                name="cnpj"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputMask
                    type={"cnpj"}
                    placeholder="CNPJ"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={modalStyles.input}
                  />
                )}
                rules={{ required: "O CNPJ é obrigatório" }}
              />
              {errors.cnpj && (
                <Text style={{ color: "red" }}>{errors.cnpj.message}</Text>
              )}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="(00)00000-0000"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={modalStyles.input}
                  />
                )}
                name="telephone"
                rules={{ required: "Telefone é obrigatório" }}
              />
              {errors.telephone && (
                <Text style={{ color: "red" }}>{errors.telephone.message}</Text>
              )}

              <ButtonPrimary title="Salvar" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
