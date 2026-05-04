import { View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { Text } from "../generics/Text";
import { Setting } from "../settings/Setting";
import { SettingForTheme } from "../settings/SettingForTheme";

export const ScreenForSettings = () => (
    <View style={appStyles.screen}>
        <SettingForTheme/>
        <Setting
            label="Language"
            setting={<Text>English</Text>}
        />
    </View>
);