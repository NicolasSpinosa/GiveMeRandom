import { GestureResponderEvent, Pressable, View } from "react-native";
import { Text } from "../generics/Text";
import { genericStyles } from "../../styles/genericStyles";
import { settingStyles } from "../../styles/setting";

type SettingProps = {
    label: string,
    description?: string,
    onPress?: (event: GestureResponderEvent) => void,
    decorator?: React.ReactNode
}

const Setting = ({
    label,
    description,
    decorator
}: SettingProps) => (
    <Pressable
        style={settingStyles.pressable}
    >
        <View style={settingStyles.descriptor}>
            <Text>{label}</Text>
            {description && <Text>{description}</Text>}
        </View>
        <View>{decorator}</View>
    </Pressable>
);