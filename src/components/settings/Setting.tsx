import { TextProps, View } from "react-native";
import { Text } from "../generics/Text";
import { genericStyles } from "../../styles/genericStyles";

type SettingProps = {
    label: string,
    labelProps?: TextProps,
    Component: React.FC
}

export const Setting = ({
    label,
    labelProps,
    Component
}: SettingProps) => (
    <View style={genericStyles.setting}>
        <Text {...labelProps}>{label}</Text>
        <Component/>
    </View>
);