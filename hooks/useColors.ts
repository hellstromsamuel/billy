import { ColorContext } from "@/components/context/ColorContext";
import { TColorTheme, TColors } from "@/constants/Colors";
import { useContext } from "react";

interface ColorType {
  theme: TColorTheme;
  setTheme: (theme: TColorTheme) => void;
  colors: TColors;
}

const useColors = (): ColorType => {
  const store = useContext(ColorContext);
  if (!store) {
    throw new Error("useColors must be defined.");
  }

  return {
    theme: store.theme,
    setTheme: store.setTheme,
    colors: store.colors,
  };
};

export default useColors;
