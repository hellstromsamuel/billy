import { View } from "react-native";
import Button from "@/components/ui/Button";
import { ThemedText } from "@/components/ui/ThemedText";
import ScreenLayout from "@/components/ui/layout/ScreenLayout";
import ThemeRadioButton from "@/components/theme/ThemeRadioButton";
import { ReactElement } from "react";
import SettingsSectionItems from "@/components/settings/SettingsSectionItems";

type TSettingsSection = { title: string; items: ReactElement[] };

export default function SettingsScreen() {
  const sections: TSettingsSection[] = [
    {
      title: "Tema",
      items: [
        <ThemeRadioButton type="light" />,
        <ThemeRadioButton type="dark" />,
      ],
    },
    {
      title: "Lag",
      items: [
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ThemedText>Navn</ThemedText>
          <Button variant="text">Lag 1</Button>
        </View>,
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ThemedText>Lag</ThemedText>
          <Button variant="text">Logo</Button>
        </View>,
      ],
    },
  ];

  return (
    <ScreenLayout>
      {sections.map((section) => (
        <View key={section.title}>
          <ThemedText type="subtitle" style={{ marginBottom: 12 }}>
            {section.title}
          </ThemedText>

          <SettingsSectionItems items={section.items} />
        </View>
      ))}
    </ScreenLayout>
  );
}
