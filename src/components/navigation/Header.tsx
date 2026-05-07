import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Pressable, View } from "react-native";
import { Text } from "../primitive/Text";
import { appStyles } from "../../styles/appStyles";
import OptionsIcon from "../../assets/icons/options.svg";
import { Appbar } from "react-native-paper";

export const Header = ({
    layout,
    options,
    route,
    navigation
}: DrawerHeaderProps) => {
    const title = options.title ?? route.name;

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={navigation.openDrawer}/>
            <Appbar.Content title={title}/>
        </Appbar.Header>
    );
};