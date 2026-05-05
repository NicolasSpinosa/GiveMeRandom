import { GestureResponderEvent, Pressable, View } from "react-native";
import { Text } from "../primitive/Text";
import { settingStyles } from "../../styles/setting";
import { useState } from "react";
import { DialogBox } from "./DialogBox";

type SettingProps = {
    label: string,
    description?: string,
    onPress?: (event: GestureResponderEvent) => void,
    decorator: React.ReactNode,
    dialogContent: React.ReactNode
}

export const Setting = ({
    label,
    description,
    decorator,
    dialogContent
}: SettingProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Pressable
                style={settingStyles.pressable}
            >
                <View style={settingStyles.descriptor}>
                    <Text>{label}</Text>
                    {description && <Text>{description}</Text>}
                </View>
                {decorator && <View>{decorator}</View>}
            </Pressable>
            <DialogBox
                visible={visible}
                setVisible={setVisible}
            >
                {dialogContent}
            </DialogBox>
        </>
    );
};