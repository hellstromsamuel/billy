import { SafeAreaView, ScrollView, View } from "react-native";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

function ScreenLayout({ children }: Props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            height: "100%",
            flexDirection: "column",
            gap: 24,
            paddingHorizontal: 12,
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ScreenLayout;
