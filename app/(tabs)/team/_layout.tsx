import { Stack } from "expo-router";

export default function TeamLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Team",
          headerTitle: "Team",
          headerShown: true,
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Søk",
            cancelButtonText: "Avbryt",
            tintColor: "purple",
          },
        }}
      />
    </Stack>
  );
}
