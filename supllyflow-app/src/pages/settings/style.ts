import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        alignItems: "center",
        // height: "100%",
    },
    appBar: {
        backgroundColor: THEME.COLORS.PRIMARY,
        paddingTop: 25,
        flexDirection: "row",
        height: 90,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",

    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 60
    },
    photo: {
        width: "100%",
        alignItems: "center"
    },
    itemSettigns: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },
    textSettings: {
        fontSize: 20,
        fontWeight: "700"
    },
});
