import { View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { Text } from "../generics/Text";
import { Setting } from "../settings/Setting";

export const ScreenForSettings = () => (
    <View style={appStyles.screen}>
        <Setting
            label="Theme"
            setting={<Text>System</Text>}
        />
        <Setting
            label="Language"
            setting={<Text>English</Text>}
        />
    </View>
);