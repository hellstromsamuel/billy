import { Stack } from "expo-router";

export default function FinesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Bøter",
          headerTitle: "Bøter",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
