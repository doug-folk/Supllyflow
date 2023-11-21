import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 26,
    marginLeft: 20,
  },
  btnsAppBar: {
    flexDirection: "row",
    gap: 10,
    marginRight: 20,
    alignItems: "center",
  },
  body: {
    alignItems: "center",
  },
  stocks: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
    backgroundColor: "#D9D9D9",
    padding: 10,
    paddingVertical: 20,
    borderRadius: 20,
  },
  cardStock: {
    width: "30%",
    height: 160,
    backgroundColor: THEME.COLORS.GREEN,
  },
  titleCardStock: {
    color: "#474B55",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  shortcuts: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    gap: 30,
    width: "90%",
    borderRadius: 20,
    marginTop: 40,
  },
  cardShortcut: {
    backgroundColor: THEME.COLORS.GREEN,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    borderRadius: 20,
  },
  titleCardShortcut: {
    color: "#474B55",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  shortcutsDiv: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },

  elemento1: {
    padding: 5,
  },
  elemento2: {
    padding: 20,
    position: "absolute",
    top: 10,
    left: 8,
  },
  chartTitle: {
    color: "#fff",
    fontSize: 16,
  },
  chartProduct: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  load: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
