import { View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { Text } from "../generics/Text";
import { Setting } from "../settings/Setting";

export const ScreenForSettings = () => (
    <View style={appStyles.screen}>
        <Setting
            label="Theme"
            Component={() => <Text>System</Text>}
        />
        <Setting
            label="Language"
            Component={() => <Text>English</Text>}
        />
    </View>
);