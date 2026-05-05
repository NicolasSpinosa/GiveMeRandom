import { Text as OG_Text, TextProps } from "react-native";
import { primitiveStyles } from "../../styles/primitiveStyles";

export const Text = ({
    style,
    ...props
}: TextProps) => <OG_Text {...props} style={[primitiveStyles.text, style]}/>;