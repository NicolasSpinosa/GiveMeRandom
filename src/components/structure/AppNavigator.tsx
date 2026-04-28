import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenForNumbers } from "../screens/ScreenForNumbers";
import { ScreenForLists } from "../screens/ScreenForLists";
import { ScreenForNamed } from "../screens/ScreenForNamed";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Numbers" component={ScreenForNumbers}/>
            <Drawer.Screen name="Lists" component={ScreenForLists}/>
            <Drawer.Screen name="Named" component={ScreenForNamed}/>
        </Drawer.Navigator>
    </NavigationContainer>
);