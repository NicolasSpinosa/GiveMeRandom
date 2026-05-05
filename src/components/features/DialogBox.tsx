import { Modal, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

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
        <View>
            <Pressable
                style={StyleSheet.absoluteFill}
                onPress={() => setVisible(false)}
            />
            {children && <View style={[dialogStyle]}>{children}</View>}
        </View>
    </Modal>
);