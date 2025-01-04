import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react-native";
import { FlashList } from "@shopify/flash-list";

interface FaqItemProps {
  data: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FaqItem({ data }: FaqItemProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        key={index}
        className="bg-white rounded-xl mb-4 p-4"
        onPress={() => setOpenItem(openItem === index ? null : index)}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-xl flex-1">{item.question}</Text>
          {openItem === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </View>
        {openItem === index && item.answer && (
          <Text className="mt-4 text-[#5b8c5b]">{item.answer}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={200}
      className="flex-1"
      keyExtractor={(item) => item.question}
    />
  );
}
