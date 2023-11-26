import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    height: "80%",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  appBar: {
    gap: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingTop: 30,
    flexDirection: "row",
    height: 90,
    width: "100%",
    alignItems: "center",
  },
  line: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginTop: 15,
  },
  msg: {
    fontSize: 26,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
 
});
