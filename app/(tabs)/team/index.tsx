import ScreenLayout from "@/components/ui/layout/ScreenLayout";
import { useNavigation } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TeamScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        tintColor: "purple",
        cancelButtonText: "Avbryt",
        placeholder: "Søk",
        onChangeText: (event: any) => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  return (
    <ScreenLayout>
      <Text>{search}</Text>
    </ScreenLayout>
  );
}
