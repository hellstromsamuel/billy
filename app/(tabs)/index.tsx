import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { Bell } from "lucide-react-native";
import { ThemedText } from "@/components/ThemedText";
import WhiteContainer from "@/components/ui/WhiteContainer";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full bg-purple-200">
      <View className="flex flex-row items-end justify-between px-4 pb-2">
        <View className="flex flex-row gap-2 items-center">
          <ThemedText type="title">Hi Samuel!</ThemedText>
          <HelloWave />
        </View>

        <TouchableOpacity
          onPress={() => {}}
          className="rounded-full p-2 bg-white text-purple-500"
        >
          <Bell color={"black"} size={28} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="px-4 mt-6 grid gap-8">
          <View>
            <ThemedText type="subtitle" className="mb-2">
              Din oversikt
            </ThemedText>

            <WhiteContainer>
              <View className="flex-1 gap-1 items-center">
                <View className="w-full h-10 bg-gray-100 rounded-lg items-center justify-center">
                  <Text className="!text-gray-700 font-bold">850kr</Text>
                </View>
                <Text className="text-sm opacity-50">Totalt</Text>
              </View>

              <View className="w-0.5 h-10 bg-gray-100" />

              <View className="flex-1 gap-1 items-center">
                <View className="w-full h-10 bg-green-100 rounded-lg items-center justify-center">
                  <Text className="!text-green-700 font-bold">650kr</Text>
                </View>
                <Text className="text-sm opacity-50">Betalt</Text>
              </View>

              <View className="flex-1 gap-1 items-center">
                <View className="w-full h-10 bg-red-100 rounded-lg items-center justify-center">
                  <Text className="!text-red-700 font-bold">200kr</Text>
                </View>
                <Text className="text-sm opacity-50">Skylder</Text>
              </View>
            </WhiteContainer>
          </View>

          <View>
            <View className="flex flex-row items-center justify-between">
              <ThemedText type="subtitle" className="mb-2">
                Siste aktiviteter
              </ThemedText>

              <TouchableOpacity onPress={() => {}}>
                <Text className="underline">Se alle</Text>
              </TouchableOpacity>
            </View>

            <View className="grid gap-4">
              {new Array(10).fill(0).map((_, index) => (
                <WhiteContainer key={index}>
                  <View className="gap-1">
                    <Text>Tittel</Text>
                    <Text className="opacity-50">Dato</Text>
                  </View>
                </WhiteContainer>
              ))}
            </View>
          </View>

          <View className="h-20" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
