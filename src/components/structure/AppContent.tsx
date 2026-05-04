import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../styles/appStyles";
import { AppNavigator } from "./AppNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export const AppContent = () => (
    <SafeAreaView style={appStyles.background}>
        <BottomSheetModalProvider>
            <AppNavigator/>
        </BottomSheetModalProvider>
    </SafeAreaView>
);