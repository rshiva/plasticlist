import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react-native";
import { FAQ } from "../data/faq";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  // Flatten FAQ data into array format
  const faqItems = Object.values(FAQ.faq).flatMap(
    category => category.questions
  );
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
     <TouchableOpacity
       key={index}
       className="bg-white rounded-xl mb-4 p-4"
       onPress={() => setOpenItem(openItem === index ? null : index)}
     >
       <View className="flex-row justify-between items-center">
         <Text className="text-xl flex-1">{item.question}</Text>
         {openItem === index ? (
           <ChevronUp size={24} />
         ) : (
           <ChevronDown size={24} />
         )}
       </View>
       {openItem === index && item.answer && (
         <Text className="mt-4 text-[#5b8c5b] text-base">{item.answer}</Text>
       )}
     </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f8fcf8] px-4 pt-8">
      <View className="flex justify-between items-center">
        <View className="w-full flex-row justify-between items-baseline mb-4">
          <View className="flex-1 items-center">
            <Text className="text-3xl font-bold">FAQ</Text>
          </View>
          <Link href="/technical-faq">
            <Text className="text-xl font-bold">Compounds</Text>
          </Link>
        </View>
      </View>

      <FlashList
        data={faqItems}
        renderItem={renderItem}
        estimatedItemSize={200}
        className="flex-1"
        keyExtractor={(item) => item.question}
      />
    </SafeAreaView>
  );
}

