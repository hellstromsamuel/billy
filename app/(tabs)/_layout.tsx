import { Tabs } from "expo-router";
import React from "react";
import { Bell, House, Settings2, Users } from "lucide-react-native";
import useColors from "@/hooks/useColors";
export default function TabLayout() {
  const { colors } = useColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarStyle: {
          paddingLeft: 8,
          paddingRight: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
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
        name="notifications"
        options={{
          headerShown: false,
          title: "Siste",
          tabBarIcon: ({ color }) => <Bell size={28} color={color} />,
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
