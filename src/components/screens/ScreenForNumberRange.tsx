import { TextInput, View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { Text } from "../primitive/Text";

export const ScreenForNumberRange = () => (
    <View style={appStyles.screen}>
        <View style={{flexDirection: "row", gap: 8}}>
            <Text>Min:</Text>
            <TextInput
                keyboardType="numeric"
                value="0"
                style={{
                    backgroundColor:"red",
                    flex: 1,
                    borderRadius: 10,
                    borderWidth: 2
                }}
            />
        </View>
        <View style={{flexDirection: "row", gap: 8}}>
            <Text>Max:</Text>
            <TextInput
                keyboardType="numeric"
                value="0"
                style={{
                    backgroundColor:"red",
                    flex: 1,
                    borderRadius: 10,
                    borderWidth: 2
                }}
            />
        </View>
    </View>
);