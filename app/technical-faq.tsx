import { View, Text,TouchableOpacity, SafeAreaView } from "react-native";
import { TECHNICAL_FAQ } from "../data/faq";
import { ChevronUp, ChevronDown } from "lucide-react-native";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";

// Transform the technical FAQ data into the format needed for FaqItem
const transformTechnicalFaqData = () => {
  const questions: Array<{ question: string; answer: string }> = [];
  
  Object.entries(TECHNICAL_FAQ).forEach(([category, categoryData]) => {
    // Add category description as a question
    questions.push({
      question: category.charAt(0).toUpperCase() + category.slice(1),
      answer: categoryData.description,
    });

    // Add subcategories
    Object.entries(categoryData).forEach(([subKey, subData]: [string, any]) => {
      if (subKey !== 'description') {
        // Handle nested objects
        if (typeof subData === 'object') {
          if (subData.description) {
            questions.push({
              question: subKey,
              answer: subData.description + 
                (subData.PlasticList_testing ? '\n\nTesting Results: ' + subData.PlasticList_testing : '') +
                (subData.Health_effects ? '\n\nHealth Effects: ' + subData.Health_effects : ''),
            });
          }
          
          // Handle deeper nesting (like DEHP_Equivalents)
          Object.entries(subData).forEach(([deepKey, deepData]: [string, any]) => {
            if (deepKey !== 'description' && typeof deepData === 'object' && deepData.description) {
              questions.push({
                question: deepKey,
                answer: deepData.description +
                  (deepData.PlasticList_testing ? '\n\nTesting Results: ' + deepData.PlasticList_testing : '') +
                  (deepData.Health_effects ? '\n\nHealth Effects: ' + deepData.Health_effects : ''),
              });
            }
          });
        }
      }
    });
  });

  return questions;
};

export default function TechnicalFaq() {
  const technicalFaqItems = transformTechnicalFaqData();
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
            <Text className="text-3xl font-bold">Compounds</Text>
          </View>
          {/* <Link href="/faq">
            <Text className="text-xl font-bold">FAQ</Text>
          </Link> */}
        </View>
      </View>

      <FlashList
        data={technicalFaqItems}
        renderItem={renderItem}
        estimatedItemSize={200}
        className="flex-1"
        keyExtractor={(item) => item.question}
      />
    </SafeAreaView>
  );
}
