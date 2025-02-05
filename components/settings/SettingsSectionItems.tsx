import useColors from "@/hooks/useColors";
import ThemedContainer from "../ui/ThemedContainer";
import { FlatList, View } from "react-native";
import { ReactElement } from "react";

interface Props {
  items: ReactElement[];
}

function SettingsSectionItems({ items }: Props) {
  const { colors } = useColors();

  return (
    <ThemedContainer style={{ paddingVertical: 6, paddingHorizontal: 12 }}>
      <FlatList
        scrollEnabled={false}
        data={items}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              borderBottomWidth: index === items.length - 1 ? 0 : 1,
              borderBottomColor: colors.borderColor,
              paddingVertical: 12,
              paddingHorizontal: 10,
            }}
          >
            {item}
          </View>
        )}
      />
    </ThemedContainer>
  );
}

export default SettingsSectionItems;
