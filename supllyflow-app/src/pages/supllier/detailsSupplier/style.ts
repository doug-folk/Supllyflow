import { StyleSheet } from "react-native";
import { THEME } from "../../../theme/theme";

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: THEME.COLORS.PRIMARY,
    marginTop: 40,
    flexDirection: "row",
    height: 60,
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
  circle: {
    width: 12,
    height: 12,
    backgroundColor: THEME.COLORS.GREEN,
      borderRadius: 25,
    marginTop: 6
  },
    item: {
        flexDirection: "row",
        gap:10,
        marginLeft: 20,
        marginBottom: 20
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    itemValue: {
        fontSize: 18,
    }
});
