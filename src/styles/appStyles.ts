import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "black"
    },
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        padding: 8,

        flexDirection: "row",
        alignItems: "center",
        gap: 8,

        zIndex: 1,
        elevation: 4,
    },
});