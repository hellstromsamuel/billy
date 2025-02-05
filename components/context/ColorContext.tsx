import { Colors, TColorTheme, TColors } from "@/constants/Colors";
import { createContext } from "react";

type ColorContextType = {
  theme: TColorTheme;
  setTheme: (theme: TColorTheme) => void;
  colors: TColors;
};

const ColorContext = createContext<ColorContextType | null>(null);

type Props = {
  theme: TColorTheme;
  setTheme: (theme: TColorTheme) => void;
  children?: React.ReactNode;
};

const ColorProvider = ({ theme, setTheme, children }: Props) => {
  const colors = Colors[theme];

  return (
    <ColorContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ColorContext.Provider>
  );
};
export { ColorContext, ColorProvider };
