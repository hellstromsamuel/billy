import { TouchableOpacity } from "react-native";
import ThemedContainer from "../ui/ThemedContainer";
import { ThemedText } from "../ui/ThemedText";

function TreansactionButton() {
  function onPress() {}

  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedContainer>
        <ThemedText style={{ fontWeight: "bold" }}>Tittel</ThemedText>
        <ThemedText>Beskrivelse</ThemedText>
      </ThemedContainer>
    </TouchableOpacity>
  );
}

export default TreansactionButton;
