import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerHeaderProps, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenForNumberRange } from "../screens/ScreenForNumberRange";
import { AppHeader } from "./AppHeader";
import { View } from "react-native";

const Drawer = createDrawerNavigator();
const appHeader = (props: DrawerHeaderProps) => <AppHeader {...props}/>;

export const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                header: appHeader,
                drawerStyle: {backgroundColor: "none"},
                drawerContentStyle: {backgroundColor: "white"},
                drawerItemStyle: {
                    borderRadius: 8,
                },
                drawerLabelStyle: {fontSize: 18}
            }}
        >
            <Drawer.Screen name="Number range" component={ScreenForNumberRange}/>
        </Drawer.Navigator>
    </NavigationContainer>
);