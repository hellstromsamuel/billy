import { Link, Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ui/ThemedText";
import { View } from "lucide-react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerLargeTitle: true }} />

      <SafeAreaView>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/home">
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </SafeAreaView>
    </>
  );
}
