import { View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { Text } from "../generics/Text";

export const ScreenForSettings = () => (
    <View style={appStyles.screen}>
        <View style={{flexDirection: "row", gap: 8}}>
            <Text>Theme</Text>
            <Text>System</Text>
        </View>
        <View style={{flexDirection: "row", gap: 8}}>
            <Text>Language</Text>
            <Text>English</Text>
        </View>
    </View>
);