import { SafeAreaProvider } from "react-native-safe-area-context";
import { ComposeProviders } from "./src/components/providers/ComposeProviders";
import { packProviderWithProps } from "./src/utils";
import { PaperProvider } from "react-native-paper";
import { RootNavigator } from "./src/components/navigation/RootNavigator";

const App = () => (
    <ComposeProviders packedProviders={[
        packProviderWithProps(SafeAreaProvider),
        packProviderWithProps(PaperProvider)
    ]}>
        <RootNavigator/>
    </ComposeProviders>
);

export default App;