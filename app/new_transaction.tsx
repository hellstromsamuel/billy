import { ThemedText } from "@/components/ThemedText";
import { MoneyCollectFilled } from "@ant-design/icons";
import { useRouter } from "expo-router";
import { ReactElement } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NewTransactionScreen() {
  const router = useRouter();

  const transactionOptions: {
    label: string;
    description: string;
    route: string;
    emoji: string;
    isDisabled: boolean;
  }[] = [
    {
      label: "Bøter",
      description: "Legg til nye bøter",
      route: "/new_transaction/fine",
      emoji: "🤑",
      isDisabled: true,
    },
    {
      label: "Betalinger",
      description: "Legg til nye betalinger",
      route: "/new_transaction/payment",
      emoji: "🤝",
      isDisabled: false,
    },
    {
      label: "Sladre",
      description: "Si fra om bøter på andre",
      route: "/new_transaction/gossip",
      emoji: "👀",
      isDisabled: false,
    },
  ];

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="absolute right-4 top-4">
        <Button
          title="Tilbake"
          color={"purple"}
          onPress={() => router.back()}
        />
      </View>

      <View className="mt-16 px-4">
        <View className="gap-2">
          <ThemedText type="title">Legg til</ThemedText>
          <Text className="text-xl">Hva vil du registere til Billy?</Text>
        </View>

        <View className="mt-8 gap-4">
          {transactionOptions.map((option) => (
            <TouchableOpacity
              key={option.label}
              className="border border-gray-200 rounded-2xl h-20 p-4 flex flex-row gap-4 items-center justify-between"
              style={{ opacity: option.isDisabled ? 0.5 : 1 }}
              disabled={option.isDisabled}
            >
              <View className="gap-1">
                <View className="flex flex-row gap-2 items-center">
                  <ThemedText type="subtitle">{option.label}</ThemedText>
                  {option.isDisabled && (
                    <Text className="text-xs font-bold bg-red-100 w-auto color-red-500 py-0.5 px-1 rounded">
                      Ikke tilgjengelig
                    </Text>
                  )}
                </View>
                <Text>{option.description}</Text>
              </View>
              <Text className="text-4xl">{option.emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
