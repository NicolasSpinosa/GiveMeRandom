import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Numbers" component={() => <></>}/>
            <Drawer.Screen name="Lists" component={() => <></>}/>
            <Drawer.Screen name="Premade" component={() => <></>}/>
        </Drawer.Navigator>
    </NavigationContainer>
);