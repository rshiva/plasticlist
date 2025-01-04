import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";
import { ChevronUp, ChevronDown, X } from "lucide-react-native";

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What does the data mean?",
      answer: "The data is from the US Food and Drug Administration (FDA) and the Environmental Protection Agency (EPA).  ",
    },
    {
      question: "How do you determine a chemical is in my food?",
      answer:
        "We use food testing data from government agencies and academic institutions to identify which chemicals are present in your food. We then compare the level of each chemical in your food to the average level found in similar foods. If the level is higher than average, we flag it.",
    },
    {
      question: "What do the levels of chemicals mean?",
      answer: "",
    },
    {
      question: "What are the health risks?",
      answer: "",
    },
    {
      question: "How can I reduce exposure?",
      answer: "",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f8fcf8] px-4 pt-8">
      <View className="flex justify-between items-center mb-8">
        <Text className="text-3xl font-bold">FAQ</Text>
      </View>

      {faqItems.map((item, index) => (
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
            <Text className="mt-4 text-[#5b8c5b]">{item.answer}</Text>
          )}
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

