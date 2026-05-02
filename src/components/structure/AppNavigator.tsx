import { createDrawerNavigator, DrawerHeaderProps } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenForNumberRange } from "../screens/ScreenForNumberRange";
import { AppHeader } from "./AppHeader";

const Drawer = createDrawerNavigator();
const appHeader = (props: DrawerHeaderProps) => <AppHeader {...props}/>;

export const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                header: appHeader
            }}
        >
            <Drawer.Screen name="Number range" component={ScreenForNumberRange}/>
        </Drawer.Navigator>
    </NavigationContainer>
);