import { FlatList, View } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import ThemedContainer from "@/components/ui/ThemedContainer";
import Button from "@/components/ui/Button";
import useColors from "@/hooks/useColors";
import ScreenLayout from "@/components/ui/layout/ScreenLayout";
import TreansactionButton from "@/components/transaction/TransactionButton";

export default function HomeScreen() {
  const { colors } = useColors();

  return (
    <ScreenLayout>
      <View>
        <ThemedText type="subtitle">Din oversikt</ThemedText>

        <ThemedContainer
          style={{ flexDirection: "row", gap: 12, marginTop: 6 }}
        >
          <View>
            <View>
              <ThemedText>850kr</ThemedText>
            </View>
            <ThemedText>Totalt</ThemedText>
          </View>

          <View
            style={{
              width: 1,
              height: 36,
              backgroundColor: colors.borderColor,
            }}
          />

          <View>
            <View>
              <ThemedText>650kr</ThemedText>
            </View>
            <ThemedText>Betalt</ThemedText>
          </View>

          <View>
            <View>
              <ThemedText>200kr</ThemedText>
            </View>
            <ThemedText>Skylder</ThemedText>
          </View>
        </ThemedContainer>

        <Button style={{ marginTop: 12 }}>Legg til betaling</Button>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <ThemedText type="subtitle">Din aktivitet</ThemedText>
          <Button variant="text">Se alle</Button>
        </View>

        <FlatList
          scrollEnabled={false}
          data={new Array(10).fill(0)}
          renderItem={({ item, index }) => <TreansactionButton />}
          contentContainerStyle={{ gap: 12 }}
        />
      </View>
    </ScreenLayout>
  );
}
