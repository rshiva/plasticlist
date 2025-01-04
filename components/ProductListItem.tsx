import { Text, View, Pressable, Image } from 'react-native';
import { ProductType } from "../app/types";

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
            uri: `https://www.plasticlist.org/_next/image?url=/images/products/${item.blinded_photo}&w=1080&q=75` 
          }}
          className="w-full h-full"
        />
      </View>
      <View className="flex-1">
        <Text className="text-lg font-semibold">{item.product}</Text>
        <Text
          className={`text-sm ${
            Number(item.DEHP_equivalents_ng_g) < 50
              ? "text-green-600"
              : Number(item.DEHP_equivalents_ng_g) < 100
                ? "text-yellow-600"
                : "text-red-600"
          }`}
        >
          DEHP Level: {item.DEHP_equivalents_ng_g}
        </Text>
      </View>
      <Text className="text-gray-400">→</Text>
    </Pressable>
  );
} 