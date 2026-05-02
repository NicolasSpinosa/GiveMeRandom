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
        padding: 12,

        flexDirection: "row",
        alignItems: "center",
        gap: 24,

        zIndex: 1,
        elevation: 4
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold"
    }
});