import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Hjem",
          headerTitle: "Hei, Samuel!",
          headerShown: true,
          headerLargeTitle: true,
        }}
      />
    </Stack>
  );
}
