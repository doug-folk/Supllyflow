import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  area: {
    marginTop: 40,
  },
  body: {
    alignItems: "center",
    marginTop: 30
  },
  title: {
    color: THEME.COLORS.PRIMARY,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    color: THEME.COLORS.TEXT,
    fontSize: 18,
    height: 48,
    borderRadius: 8,
    paddingLeft: 20,
    width: "90%",
    alignItems: "center",
    marginBottom: 25,
    fontWeight: "500",
  },
  containerBtn: {
    width: "90%",
  },
});
