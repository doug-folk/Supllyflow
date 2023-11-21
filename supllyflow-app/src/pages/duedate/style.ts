import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  body: {
    paddingTop: 40,
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleRow: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "90%",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  circleValue: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: THEME.COLORS.GREEN, 
    marginTop: 40,
    marginBottom: 40,
  },
  circleValueText: {
    fontSize: 22,
    fontWeight: "700",
    color: THEME.COLORS.GREEN,
  },

  products: {
    width: "90%",
    height: 60,
  },
  productsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productsRowLeft: {
    flexDirection: "row",
    gap: 15,
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: THEME.COLORS.GREEN,
    borderRadius: 25,
  },
  circle2: {
    width: 15,
    height: 15,
    backgroundColor: THEME.COLORS.ALERT,
    borderRadius: 25,
  },
  appBar: {
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingTop: 5,
    flexDirection: "row",
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginTop: 15,
  },
  productsName: {
    fontWeight: "500",
    fontSize: 18,
  },
  productsValue: {
    fontSize: 16,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  load: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
