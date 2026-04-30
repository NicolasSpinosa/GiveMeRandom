import { createDrawerNavigator, DrawerHeaderProps } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenForNumbers } from "../screens/ScreenForNumbers";
import { ScreenForLists } from "../screens/ScreenForLists";
import { ScreenForNamed } from "../screens/ScreenForNamed";
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
            <Drawer.Screen name="Numbers" component={ScreenForNumbers}/>
            <Drawer.Screen name="Lists" component={ScreenForLists}/>
            <Drawer.Screen name="Named" component={ScreenForNamed}/>
        </Drawer.Navigator>
    </NavigationContainer>
);