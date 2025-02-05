import useColors from "@/hooks/useColors";
import RadioButton from "../ui/RadioButton";
import { TColorTheme } from "@/constants/Colors";

interface Props {
  type: TColorTheme;
}

const types: Record<TColorTheme, { label: string; value: TColorTheme }> = {
  light: {
    label: "Lyst",
    value: "light",
  },
  dark: {
    label: "Mørkt",
    value: "dark",
  },
};

function ThemeRadioButton({ type }: Props) {
  const buttonType = types[type];
  const { theme, setTheme } = useColors();

  function onPress() {
    setTheme(buttonType.value);
  }

  return (
    <RadioButton
      selected={theme === buttonType.value}
      onPress={onPress}
      label={buttonType.label}
    />
  );
}

export default ThemeRadioButton;
