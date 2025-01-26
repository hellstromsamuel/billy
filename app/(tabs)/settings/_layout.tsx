import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Innstillinger",
          headerTitle: "Innstillinger",
        }}
      />
    </Stack>
  );
}
