import { useRouter } from "expo-router";
import Button from "./Button";
import { Plus } from "lucide-react-native";
import useColors from "@/hooks/useColors";

function BottomTabsCtaButton() {
  const router = useRouter();
  const { colors } = useColors();

  return (
    <Button
      style={{
        position: "absolute",
        width: "max-content",
        bottom: 42,
        borderRadius: 100,
        padding: 16,
        backgroundColor: colors.primary,
        alignSelf: "center",
      }}
      onPress={() => router.push("/new_transaction")}
    >
      <Plus size={28} color="#FFF" />
    </Button>
  );
}

export default BottomTabsCtaButton;
