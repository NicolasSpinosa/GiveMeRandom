import { TextProps, View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { Text } from "../generics/Text";

type SettingProps = {
    label: string,
    labelProps?: TextProps,
    Component: React.FC
}

const Setting = ({
    label,
    labelProps,
    Component
}: SettingProps) => (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Text {...labelProps}>{label}</Text>
        <Component/>
    </View>
);

export const ScreenForSettings = () => (
    <View style={appStyles.screen}>
        <Setting
            label="Theme"
            Component={() => <Text>System</Text>}
        />
        <Setting
            label="Language"
            Component={() => <Text>English</Text>}
        />
    </View>
);