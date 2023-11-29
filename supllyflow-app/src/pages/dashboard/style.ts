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
    flexDirection: "column",
    gap: 10,
    marginTop: 30,
    backgroundColor: "#D9D9D9",
    padding: 10,
    paddingVertical: 20,
    paddingBottom: 40,
    borderRadius: 20,
  },
  cardStock: {
    width: "30%",
    height: 160,
    backgroundColor: THEME.COLORS.GREEN,
  },
  titleProduct: {
    color: "#474B55",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, 
  },
  titleWork: {
    color: "#474B55",
    fontSize: 26,
    fontWeight: "bold",
    // textAlign: "center",
    // marginBottom: 10, 
    marginLeft: 30
  },
  titleCardStock: {
    color: "#474B55",
    fontSize: 20,
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
    marginTop: 30,
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
    padding: 23,
    position: "absolute",
    top: 10,
    // left: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
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
