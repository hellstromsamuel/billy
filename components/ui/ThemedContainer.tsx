import useColors from "@/hooks/useColors";
import { View } from "react-native";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  style?: any;
}

function ThemedContainer({ children, style }: Props) {
  const { colors } = useColors();
  return (
    <View
      style={{
        paddingVertical: 14,
        paddingHorizontal: 18,
        backgroundColor: colors.background,
        borderRadius: 20,
        borderCurve: "continuous",
        ...style,
      }}
    >
      {children}
    </View>
  );
}

export default ThemedContainer;
