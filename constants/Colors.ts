/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export type TColorTheme = "light" | "dark";
export type TColors = typeof Colors.light;

const primary = "purple";
const sharedColors = {
  primary,
  tabIconSelected: primary,
  tint: primary,
};

export const Colors = {
  light: {
    name: "light",
    text: "black",
    background: "white",
    icon: "#687076",
    tabIconDefault: "#687076",
    borderColor: "rgba(0, 0, 0, 0.2)",
    ...sharedColors,
  },
  dark: {
    name: "dark",
    text: "white",
    background: "#151718",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    borderColor: "rgba(255, 255, 255, 0.2)",
    ...sharedColors,
  },
};
