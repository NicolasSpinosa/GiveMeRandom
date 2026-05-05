import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../styles/appStyles";
import { AppNavigator } from "./AppNavigator";

export const AppContent = () => (
    <SafeAreaView style={appStyles.background}>
        <AppNavigator/>
    </SafeAreaView>
);