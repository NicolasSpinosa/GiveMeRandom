import { Pressable, PressableProps } from "react-native";
import { Text } from "../generics/Text";
import OptionsIcon from "../../assets/icons/options.svg";

export const AppHederButton = (props: PressableProps) => (
    <Pressable {...props}>
        <OptionsIcon width={16} height={16}/>
    </Pressable>
);