import { GestureResponderEvent, Pressable, View } from "react-native";
import { Text } from "../generics/Text";
import { genericStyles } from "../../styles/genericStyles";

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
        style={genericStyles.setting}
    >
        <View>
            <Text>{label}</Text>
            {description && <Text>{description}</Text>}
        </View>
        <View>{decorator}</View>
    </Pressable>
);