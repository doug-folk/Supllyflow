import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";
import ButtonPrimary from "../../../components/buttonPrimary";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Product } from "../../../utils/interfaces/product";
import { api } from "../../../services";
import { Supplier } from "../../../utils/interfaces/supplier";
import { useAuth } from "../../../contexts/AuthContext";
import RNPickerSelect from "react-native-picker-select";
import { Snackbar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

export function CreateProduct() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const { getToken } = useAuth();
  const token = getToken();

  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState("");
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isSelectedSupplier, setIsSelectedSupplier] = useState(false);
  const [moneyValue, setMoneyValue] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);


  const placeholder = {
    label: "Selecione o fornecedor",
    value: null,
    color: "#000",
  };


  async function getSuppliers() {
    await api
      .get("/supplier", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSuppliers(response.data.suppliers);
        console.log(suppliers);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function prevPage() {
    navigation.goBack();
  }

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
    console.log(date);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  function createProduct(data: Product) {
    let amountFormat = parseFloat(stripFormatting(moneyValue));
    const formData = {
      name: data.name,
      supplierId: selectedValue,
      description: data.description,
      amount: amountFormat,
      category: data.category,
      stockMin: parseInt(data.stockMin),
      stockMax: parseInt(data.stockMax),
      stockCurrent: parseInt(data.stockCurrent),
      dueDate: date
    };

    if (selectedValue.length > 1 && amountFormat > 0) {
      api
        .post("/product", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          prevPage();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsSelectedSupplier(true);
    }
  }

  const handleMoneyChange = (text: string) => {
    setMoneyValue(text);
  };

  const stripFormatting = (text: string) => {
    const stringWithoutFormatting = text.replace(/[^\d,]/g, "");
    return stringWithoutFormatting.replace(",", ".");
  };

  useEffect(() => {
    getSuppliers();
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <View style={styles.area}>
      <TouchableOpacity onPress={prevPage}>
        <MaterialIcons
          name="close"
          color="#000"
          size={30}
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Cadastrar Produto</Text>
      <View style={styles.body}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nome"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
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
              placeholder="Descrição"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="description"
          rules={{ required: "Descrição é obrigatório" }}
        />
        {errors.description && (
          <Text style={{ color: "red" }}>{errors.description.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Categoria"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}
          name="category"
          rules={{ required: "Categoria é obrigatório" }}
        />
        {errors.name && (
          <Text style={{ color: "red" }}>{errors.name.message}</Text>
        )}

        <View style={{ alignItems: "flex-start", width: "85%" }}>
          <Text style={{ textAlign: "left", fontSize: 18 }}>
            Valor unitário
          </Text>
        </View>

        <TextInputMask
          style={styles.input}
          type="money"
          placeholder="R$ 00,00"
          options={{
            precision: 2,
            separator: ",",
            delimiter: ".",
            unit: "R$ ",
            suffixUnit: "",
          }}
          onChangeText={handleMoneyChange}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Estoque Atual"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="numeric"
            />
          )}
          name="stockCurrent"
          rules={{ required: "Estoque Atual é obrigatório" }}
        />
        {errors.stockCurrent && (
          <Text style={{ color: "red" }}>{errors.stockCurrent.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Estoque Minímo"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="numeric"
            />
          )}
          name="stockMin"
          rules={{ required: "Estoque Minímo é obrigatório" }}
        />
        {errors.stockMin && (
          <Text style={{ color: "red" }}>{errors.stockMin.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Estoque Máximo"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              keyboardType="numeric"
            />
          )}
          name="stockMax"
          rules={{ required: "Estoque Máximo é obrigatório" }}
        />
        {errors.stockMin && (
          <Text style={{ color: "red" }}>{errors.stockMin.message}</Text>
        )}

        <View style={{justifyContent: "flex-start", alignItems: "flex-start", width: "90%"}}>
        <TouchableOpacity onPress={showDatepicker} style={{flexDirection: "row", gap: 10, alignItems: "center", backgroundColor: "#fff", padding: 10, borderRadius:10}}>
          <MaterialIcons name="calendar-today" size={30} color="#00633F" />
          <Text>Selecione a data de vencimento</Text>
        </TouchableOpacity>

        </View>
        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date" // or "time" for time picker
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <View style={{ width: "90%", marginTop: 20 }}>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => setSelectedValue(value)}
            items={suppliers.map((item) => ({
              label: item.name,
              value: item.id,
              key: item.id,
            }))}
          />
        </View>

        <View style={styles.containerBtn}>
          <ButtonPrimary
            title="Cadastrar"
            onPress={handleSubmit(createProduct)}
          />
        </View>

        <Snackbar
          visible={isSelectedSupplier}
          style={{ marginTop: 100 }}
          onDismiss={() => setIsSelectedSupplier(false)}
        >
          Preencha todos os campos
        </Snackbar>
      </View>
    </View>
  );
}
