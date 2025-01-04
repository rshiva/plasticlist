import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable, Image, SafeAreaView } from 'react-native';
import { useState, useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';
import "../global.css";
import { PRODUCTS } from '../data/products';
import { ProductListItem } from '../components/ProductListItem';
import { ProductType } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => 
    product.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

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
          renderItem={({ item }) => (
            <ProductListItem item={item} onPress={setSelectedProduct} />
          )}
          estimatedItemSize={600}
          className="flex-1"
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView> 
  );
}
