import { ThemedText } from "@/components/ThemedText";
import WhiteContainer from "@/components/ui/WhiteContainer";
import { Edit, Plus } from "lucide-react-native";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FinesScreen() {
  return (
    <SafeAreaView className="h-full bg-purple-200">
      <View className="gap-4">
        <View className="flex flex-row items-center justify-between px-4">
          <View className="flex flex-row gap-2 items-center">
            <ThemedText type="title">Fines</ThemedText>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            className="rounded-full p-2 bg-purple-500 flex flex-row gap-1 items-center"
          >
            <Text className="font-bold text-white pl-1">Opprett ny</Text>
            <Plus color={"white"} size={28} />
          </TouchableOpacity>
        </View>

        <View className="px-4">
          <Text className="mb-2">Søk</Text>
          <TextInput
            placeholder="Navn, beskrivelse, beløp"
            className="p-4 rounded-2xl bg-gray-100"
          />
        </View>
      </View>

      <View className="px-4 mt-8">
        <ThemedText type="subtitle" className="pb-4">
          Lagrede bøter
        </ThemedText>
        <ScrollView>
          <View className="gap-4">
            {new Array(5).fill(0).map((_, index) => (
              <WhiteContainer
                key={index}
                className="flex flex-row items-center justify-between"
              >
                <View className="flex flex-row gap-4">
                  <View className="gap-1">
                    <Text>Tittel</Text>
                    <Text className="text-sm font-bold bg-gray-200 rounded px-1 py-0.5">
                      100kr
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row items-center gap-2">
                  <TouchableOpacity
                    onPress={() => {}}
                    className="border border-gray-200 p-2 rounded-full"
                  >
                    <Edit color={"black"} size={16} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    className="bg-purple-500 p-2 rounded-full"
                  >
                    <Text className="text-white font-bold text-sm">Gi bot</Text>
                  </TouchableOpacity>
                </View>
              </WhiteContainer>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
