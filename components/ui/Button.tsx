import useColors from "@/hooks/useColors";
import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";

type ButtonVariant = "default" | "text";

interface Props {
  children: string | React.ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  style?: any;
}

function Button({ children, onPress, variant = "default", style }: Props) {
  const { colors } = useColors();
  const buttonStyling = {
    default: {
      borderRadius: 16,
      borderCurve: "continuous",
      width: "100%",
      padding: 14,
      backgroundColor: colors.primary,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: colors.primary,
      padding: 4,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
  };
  const variantStyling = buttonStyling[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...variantStyling,
        ...style,
      }}
    >
      <Text style={{ fontWeight: "bold", color: variantStyling.color }}>
        {children}
      </Text>
      {variant === "text" && <ChevronRight size={14} color={"purple"} />}
    </TouchableOpacity>
  );
}

export default Button;
