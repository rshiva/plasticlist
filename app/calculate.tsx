import { View } from "react-native";
import { ExposureCalculator } from "../components/ExposureCalculator";

export default function Calculate() {
  return (
    <View className="flex-1 bg-[#f8fcf8]">
      <ExposureCalculator />
    </View>
  );
}
