import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { House, NotepadText, Settings2, Users } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          paddingLeft: 8,
          paddingRight: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Hjem",
          tabBarIcon: ({ color }) => <House size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          headerShown: false,
          title: "Lag",
          tabBarIcon: ({ color }) => (
            <Users size={28} color={color} style={{}} />
          ),
          tabBarItemStyle: {
            marginRight: 32, // Space for CTA button
          },
        }}
      />

      <Tabs.Screen
        name="fines"
        options={{
          headerShown: false,
          title: "Bøter",
          tabBarIcon: ({ color }) => <NotepadText size={28} color={color} />,
          tabBarItemStyle: {
            marginLeft: 32, // Space for CTA button
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Instillinger",
          tabBarIcon: ({ color }) => <Settings2 size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
