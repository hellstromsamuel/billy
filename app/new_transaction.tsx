import { ThemedText } from "@/components/ui/ThemedText";
import ThemedContainer from "@/components/ui/ThemedContainer";
import { useRouter } from "expo-router";
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
      description: "Gi nye bøter",
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
    <SafeAreaView>
      <View style={{ position: "absolute", top: 8, right: 8 }}>
        <Button
          title="Tilbake"
          color={"purple"}
          onPress={() => router.back()}
        />
      </View>

      <View style={{ paddingHorizontal: 12, paddingTop: 48 }}>
        <View style={{ gap: 8 }}>
          <ThemedText type="title">Legg til</ThemedText>
          <ThemedText>Hva vil du registere til Billy?</ThemedText>
        </View>

        <View style={{ gap: 16, marginTop: 32 }}>
          {transactionOptions.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={{ opacity: option.isDisabled ? 0.5 : 1 }}
              disabled={option.isDisabled}
            >
              <ThemedContainer
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ gap: 4 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <ThemedText style={{ fontWeight: "bold" }}>
                      {option.label}
                    </ThemedText>
                    {option.isDisabled && (
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          color: "red",
                        }}
                      >
                        Kun admin
                      </Text>
                    )}
                  </View>
                  <ThemedText>{option.description}</ThemedText>
                </View>

                <ThemedText style={{ fontSize: 24 }}>{option.emoji}</ThemedText>
              </ThemedContainer>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
