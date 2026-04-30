import { Pressable, PressableProps, TextProps } from "react-native";
import { Text } from "./Text";

export type ButtonProps = {
    buttonProps?: PressableProps;

    label?: string;
    labelProps?: TextProps;
}

export const Button = ({
    buttonProps,
    label,
    labelProps,
}: ButtonProps) => (
    <Pressable {...buttonProps}>
        {label && (
            <Text {...labelProps}>{label}</Text>
        )}
    </Pressable>
);