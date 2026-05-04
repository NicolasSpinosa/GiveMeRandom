import { TextProps, View } from "react-native";
import { Text } from "../generics/Text";
import { genericStyles } from "../../styles/genericStyles";

type SettingProps = {
    label: string,
    labelProps?: TextProps,
    setting: React.ReactNode
}

export const Setting = ({
    label,
    labelProps,
    setting
}: SettingProps) => (
    <View style={genericStyles.setting}>
        <Text {...labelProps}>{label}</Text>
        {setting}
    </View>
);