import { Pressable } from "react-native";
import { Setting } from "./Setting";

export const SettingForTheme = () => (
    <Setting
        label="Theme"
        setting={
            <Pressable>
                Hello
            </Pressable>
        }
    />
);