import { Stack } from "expo-router";

export default function NotificationsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Siste",
          headerTitle: "Siste",
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
