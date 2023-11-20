import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingTop: 20,
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },
  editTextBtn: {
    color: "#fff",
    fontSize: 18,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 40,
  },
  btnsAppBar: {
    flexDirection: "row",
    gap: 25,
    marginRight: 10,
  },
  circle: {
    width: 12,
    height: 12,
    backgroundColor: THEME.COLORS.GREEN,
    borderRadius: 25,
    marginTop: 6,
  },
  item: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemValue: {
    fontSize: 18,
  },
  modalDeleteContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalDeleteMain: {
    backgroundColor: "white",
    marginTop: 20,
    height: "25%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleModalDelete: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  btnYes:{
    backgroundColor: THEME.COLORS.GREEN,
    width: 80,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnNo:{
    backgroundColor: THEME.COLORS.ALERT,
    width: 80,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnYes: {
   fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

  },
  load: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600"
  },
  valueTotal: {
    fontSize: 22,
    fontWeight: "bold",
    color: THEME.COLORS.GREEN
    
  }
});
