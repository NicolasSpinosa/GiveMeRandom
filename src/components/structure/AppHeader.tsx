import { DrawerHeaderProps } from "@react-navigation/drawer";
import { View } from "react-native";
import { Text } from "../generics/Text";
import { appStyles } from "../../styles/appStyles";
import { AppHederButton } from "./AppHeaderButton";

export const AppHeader = ({
    layout,
    options,
    route,
    navigation
}: DrawerHeaderProps) => {
    const title = options.title ?? route.name;

    return (
        <View style={appStyles.header}>
            <AppHederButton onPress={navigation.openDrawer}/>
            <Text style={appStyles.headerTitle}>{title}</Text>
        </View>
    );
};