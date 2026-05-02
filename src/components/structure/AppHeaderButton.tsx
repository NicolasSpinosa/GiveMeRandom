import { Pressable, PressableProps } from "react-native";
import { Text } from "../generics/Text";
import OptionsIcon from "../../assets/icons/options.svg";

export const AppHederButton = (props: PressableProps) => (
    <Pressable {...props}>
        <OptionsIcon width={18} height={18} />
    </Pressable>
);