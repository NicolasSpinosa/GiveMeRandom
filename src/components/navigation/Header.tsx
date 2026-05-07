import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Appbar } from "react-native-paper";

export const Header = ({
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