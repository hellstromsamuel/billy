import useColors from "@/hooks/useColors";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

interface Props {
  selected: boolean;
  onPress: () => void;
  label?: string;
}

function RadioButton({ selected, onPress, label }: Props) {
  const { colors } = useColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ThemedText>{label}</ThemedText>

      <View
        style={{
          borderRadius: 100,
          borderWidth: 1,
          borderColor: colors.borderColor,
          padding: 2,
        }}
      >
        <View
          style={{
            borderRadius: 100,
            padding: 10,
            backgroundColor: selected ? colors.primary : "transparent",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default RadioButton;
