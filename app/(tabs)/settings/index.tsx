import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import WhiteContainer from "@/components/ui/WhiteContainer";
import { cn } from "@/utils/cn";
import { ReactElement, useState } from "react";

type SettingsItem = {
  label: string;
  view: ReactElement;
};

export default function SettingsScreen() {
  const [color, setColor] = useState("purple");

  const teamSettings: SettingsItem[] = [
    {
      label: "Navn",
      view: (
        <View>
          <Text className="font-bold">Lag 1</Text>
        </View>
      ),
    },
    {
      label: "Logo",
      view: (
        <View>
          <Text className="font-bold">Logo</Text>
        </View>
      ),
    },
    {
      label: "Fargetema",
      view: (
        <View>
          <Text
            className={cn(
              `font-bold p-1 rounded text-${color}-500 bg-${color}-200`
            )}
          >
            {color}
          </Text>
        </View>
      ),
    },
  ];

  const sections: { title: string; items: SettingsItem[] }[] = [
    {
      title: "Lag",
      items: teamSettings,
    },
  ];

  return (
    <SafeAreaView className="h-full bg-purple-200">
      <ScrollView className="px-4 pt-8">
        {sections.map((section) => (
          <View key={section.title}>
            <ThemedText type="subtitle" className="mb-2">
              {section.title}
            </ThemedText>
            <WhiteContainer className="flex-col">
              {section.items.map((item, index) => (
                <View
                  className={cn(
                    "w-full py-2 px-2 flex flex-row items-center justify-between",
                    index !== section.items.length - 1 &&
                      " border-b border-gray-200"
                  )}
                  key={item.label}
                >
                  <Text>{item.label}</Text>
                  {item.view}
                </View>
              ))}
            </WhiteContainer>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
