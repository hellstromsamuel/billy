import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../styling/global.css";
import { ColorProvider } from "@/components/context/ColorContext";
import { TColorTheme } from "@/constants/Colors";
import { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import BottomTabsCtaButton from "@/components/ui/BottomTabsCtaButton";

export default function RootLayout() {
  const [theme, setTheme] = useState<TColorTheme>("light");

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <ColorProvider theme={theme} setTheme={setTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="new_transaction"
            options={{
              presentation: "modal",
              headerShown: false,
              title: "New transaction",
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>

        <StatusBar style="auto" />
        <BottomTabsCtaButton />
      </ColorProvider>
    </ThemeProvider>
  );
}
