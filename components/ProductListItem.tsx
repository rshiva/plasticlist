import { Text, View, Pressable, Image } from 'react-native';
import { ProductType } from "../app/types";
import { padImageName } from "../utils/imageNumberPadding";

type ProductListItemProps = {
  item: ProductType;
  onPress: (product: ProductType) => void;
};

export function ProductListItem({ item, onPress }: ProductListItemProps) {
  
  return (
    <Pressable
      onPress={() => onPress(item)}
      className="flex-row items-center p-4 bg-white rounded-lg mb-2 shadow-sm"
    >
      <View className="w-12 h-12 mr-4 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          source={{
            uri: `https://www.plasticlist.org/_next/image?url=%2Fimages%2Fproducts%2F${padImageName(item.product_id)}.jpg&w=1080&q=75`,
          }}
          className="w-full h-full"
        />
      </View>
      <View className="flex-1">
        <Text className="text-lg font-semibold">{item.product}</Text>
        {renderDEHPLevel(item.DEHP_equivalents_ng_g)}
      </View>
      <Text className="text-gray-400">→</Text>
    </Pressable>
  );
}

const renderDEHPLevel = (value: string) => {
  // Handle <LOQ case
  if (value.toLowerCase() === '<loq') {
    return (
      <Text className="text-sm text-green-600">
        DEHP Level: Very Low (Below Measurable Levels)
      </Text>
    );
  }

  // Handle <X case
  if (value.startsWith('<')) {
    const threshold = parseFloat(value.substring(1));
    return (
      <Text className="text-sm text-green-600">
        DEHP Level: Below {threshold} ng/g
      </Text>
    );
  }

  // Handle numerical values
  const numericValue = parseFloat(value);
  if (!isNaN(numericValue)) {
    let colorClass = 'text-green-600';
    let levelText = 'Low';
    
    if (numericValue > 100) {
      colorClass = 'text-red-600';
      levelText = 'High';
    } else if (numericValue > 50) {
      colorClass = 'text-yellow-600';
      levelText = 'Medium';
    }

    return (
      <Text className={`text-sm ${colorClass}`}>
        DEHP Level: {numericValue} ng/g ({levelText})
      </Text>
    );
  }

  // Fallback for unexpected values
  return (
    <Text className="text-sm text-gray-600">
      DEHP Level: {value}
    </Text>
  );
}; 