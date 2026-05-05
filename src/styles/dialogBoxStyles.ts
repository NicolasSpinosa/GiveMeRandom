import { StyleSheet } from "react-native";

export const dialogBoxStyles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    dialog: {
        backgroundColor: "white"
    }
});