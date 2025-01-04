import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable, Image, SafeAreaView } from 'react-native';
import { useState, useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';
import "../global.css";
import { PRODUCTS } from '../data/products';

type Product = {
  id: string;
  product_id: string;
  product: string;
  tags: string;
  DEHP_equivalents_ng_g: string | number;
  DEHP_ng_g: string | number;
  blinded_photo: string;
  collected_at: string;
  expiration_date: string;
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => 
    product.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const renderProduct = ({ item }: { item: Product }) => (
    <Pressable
      onPress={() => setSelectedProduct(item)}
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

  return (
    <SafeAreaView className="flex-1 bg-[#f8fcf8] px-4 pt-8">
      <View className="flex justify-between items-center mb-8">
        <Text className="text-3xl font-bold mb-4">Products</Text>
      </View>
      {!selectedProduct && (
        <View className="flex-row items-center bg-[#f0f9f0] rounded-lg p-3 mb-6">
          <TextInput
            placeholder="Search food products"
            className="flex-1 ml-2 text-base"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={handleSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={() => setSearchQuery("")} className="p-2">
              <Text className="text-gray-500">✕</Text>
            </Pressable>
          )}
        </View>
      )}

      {selectedProduct ? (
        <View className="flex-1">
          <Pressable
            onPress={() => setSelectedProduct(null)}
            className="flex-row items-center mb-4"
          >
            <Text className="text-blue-500">← Back to list</Text>
          </Pressable>

          <View className="p-4 bg-white rounded-lg shadow-sm">
            <Text className="text-2xl font-bold mb-2">
              {selectedProduct.product}
            </Text>
            <Text className="text-gray-600 mb-4">
              Location: {selectedProduct.collected_at}
            </Text>
            <Text className="text-lg mb-2">
              DEHP Level: {selectedProduct.DEHP_equivalents_ng_g}
            </Text>
            <Text className="text-lg mb-2">
              Raw DEHP: {selectedProduct.DEHP_ng_g}
            </Text>
            <Text className="text-lg">
              Expires: {selectedProduct.expiration_date}
            </Text>
          </View>
        </View>
      ) : (
        <FlashList
          data={filteredProducts}
          renderItem={renderProduct}
          estimatedItemSize={600}
          className="flex-1"
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView> 
  );
}
