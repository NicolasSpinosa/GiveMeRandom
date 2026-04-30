import { DrawerHeaderProps } from "@react-navigation/drawer";
import { View } from "react-native";
import { Text } from "../generics/Text";
import { appStyles } from "../../styles/appStyles";

export const AppHeader = ({
    layout,
    options,
    route,
    navigation
}: DrawerHeaderProps) => {
    const title = options.title ?? route.name;

    return (
        <View style={appStyles.header}>
            <Text>{title}</Text>
        </View>
    );
};