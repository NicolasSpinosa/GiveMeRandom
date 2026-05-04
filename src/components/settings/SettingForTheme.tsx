import { Pressable } from "react-native";
import { Setting } from "./Setting";
import { Text } from "../generics/Text";

export const SettingForTheme = () => (
    <Setting
        label="Theme"
        setting={
            <Pressable>
                <Text>Hello</Text>
            </Pressable>
        }
    />
);