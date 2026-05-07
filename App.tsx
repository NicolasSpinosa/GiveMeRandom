import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContent } from "./src/components/structure/AppContent";
import { ComposeProviders } from "./src/components/providers/ComposeProviders";
import { packProviderWithProps } from "./src/utils";
import { PaperProvider } from "react-native-paper";

const App = () => (
    <ComposeProviders packedProviders={[
        packProviderWithProps(SafeAreaProvider),
        packProviderWithProps(PaperProvider)
    ]}>
        <AppContent/>
    </ComposeProviders>
);

export default App;