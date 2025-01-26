import { cn } from "@/utils/cn";
import { View } from "react-native";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

function WhiteContainer({ children, className }: Props) {
  return (
    <View
      className={cn(
        "bg-white w-full rounded-2xl p-4 flex flex-row gap-2",
        className
      )}
    >
      {children}
    </View>
  );
}

export default WhiteContainer;
