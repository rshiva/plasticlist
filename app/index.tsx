import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Pressable, Image, SafeAreaView } from 'react-native';
import { useState, useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';
import "../global.css";
import { PRODUCTS } from '../data/products';
import { ProductListItem } from '../components/ProductListItem';
import { ProductType } from './types';
import { ProductDetail } from '../components/ProductDetail';

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
      <View className="flex-row justify-center items-center mb-4">
        <Image source={require('../assets/icon.png')} className="w-12 h-12 rounded-full mr-2" />
        <Text className="text-3xl font-bold">PlasticList.org</Text>
      </View>
      {!selectedProduct && (
        <View className="flex-row items-center bg-[#f0f9f0] rounded-lg p-3 m-4 mb-2 border border-gray-200">
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
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
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
