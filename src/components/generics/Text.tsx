import { Text as OG_Text, TextProps } from "react-native";
import { genericStyles } from "../../styles/genericStyles";

export const Text = ({
    style,
    ...props
}: TextProps) => <OG_Text {...props} style={[genericStyles.text, style]}/>;