import { DrawerHeaderProps } from "@react-navigation/drawer";
import { View } from "react-native";
import { Text } from "../generics/Text";

export const AppHeader = ({
    layout,
    options,
    route,
    navigation
}: DrawerHeaderProps) => {
    const title = options.title ?? route.name;

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};