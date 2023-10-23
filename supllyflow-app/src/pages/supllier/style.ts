import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    height: 600,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    color: THEME.COLORS.PRIMARY,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: "center"
  },
  input: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    color: THEME.COLORS.TEXT,
    fontSize: 18,
    height: 48,
    borderRadius: 8,
    paddingLeft: 20,
    marginTop: 25,
    fontWeight: "500",
  },
});