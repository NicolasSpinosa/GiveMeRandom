import { Modal, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { dialogBoxStyles } from "../../styles/dialogBoxStyles";

type DialogBoxProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    dialogStyle?: StyleProp<ViewStyle>,
    children: React.ReactNode
}

export const DialogBox = ({
    visible,
    setVisible,
    dialogStyle,
    children
}: DialogBoxProps) => (
    <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
    >
        <View style={dialogBoxStyles.backdrop}>
            <Pressable
                style={StyleSheet.absoluteFill}
                onPress={() => setVisible(false)}
            />
            {children &&
                <View
                    style={[dialogBoxStyles.dialog, dialogStyle]}
                >
                    {children}
                </View>
            }
        </View>
    </Modal>
);