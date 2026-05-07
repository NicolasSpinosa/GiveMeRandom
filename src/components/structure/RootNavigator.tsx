import { createDrawerNavigator, DrawerHeaderProps } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenForNumberRange } from "../screens/ScreenForNumberRange";
import { AppHeader } from "./AppHeader";
import { ScreenForSettings } from "../screens/ScreenForSettings";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../styles/appStyles";

const Drawer = createDrawerNavigator();
const appHeader = (props: DrawerHeaderProps) => <AppHeader {...props}/>;

export const RootNavigator = () => (
    <SafeAreaView style={appStyles.background}>
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    header: appHeader
                }}
            >
                <Drawer.Screen name="Number range" component={ScreenForNumberRange}/>
                <Drawer.Screen name="Options" component={ScreenForSettings}/>
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaView>
);