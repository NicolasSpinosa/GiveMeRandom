import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContent } from "./src/components/structure/AppContent";

const App = () => (
    <SafeAreaProvider>
        <AppContent/>
    </SafeAreaProvider>
);

export default App;