import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Pressable, View } from "react-native";
import { Text } from "../primitive/Text";
import { appStyles } from "../../styles/appStyles";
import OptionsIcon from "../../assets/icons/options.svg";

export const AppHeader = ({
    layout,
    options,
    route,
    navigation
}: DrawerHeaderProps) => {
    const title = options.title ?? route.name;

    return (
        <View style={appStyles.header}>
            <Pressable onPress={navigation.openDrawer}>
                <OptionsIcon width={18} height={18} />
            </Pressable>
            <Text style={appStyles.headerTitle}>{title}</Text>
        </View>
    );
};