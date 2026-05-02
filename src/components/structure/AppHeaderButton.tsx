import { Pressable, PressableProps } from "react-native";
import { Text } from "../generics/Text";

export const AppHederButton = (props: PressableProps) => (
    <Pressable {...props}>
        <Text>DRAWER</Text>
    </Pressable>
);