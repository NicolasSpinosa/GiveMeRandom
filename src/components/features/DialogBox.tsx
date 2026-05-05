import { Modal, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type DialogBoxProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    dialogStyle?: StyleProp<ViewStyle>,
    content: React.ReactNode
}

export const DialogBox = ({
    visible,
    setVisible,
    dialogStyle,
    content
}: DialogBoxProps) => (
    <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
    >
        <View>
            <Pressable
                style={StyleSheet.absoluteFill}
                onPress={() => setVisible(false)}
            />
            {content && <View style={[dialogStyle]}>{content}</View>}
        </View>
    </Modal>
);