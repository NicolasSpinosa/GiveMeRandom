import { SafeAreaView } from "react-native-safe-area-context";
import { structureStyles } from "../../styles/structureStyles";
import { AppNavigator } from "./AppNavigator";

export const AppContent = () => (
    <SafeAreaView style={structureStyles.background}>
        <AppNavigator/>
    </SafeAreaView>
);