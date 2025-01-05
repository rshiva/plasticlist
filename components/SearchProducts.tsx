import { View, Text, TextInput, Pressable } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useState, useCallback } from 'react';
import { ProductType } from '../app/types';
import { PRODUCTS } from '../data/products';

type SearchProductsProps = {
  onProductSelect: (product: ProductType) => void;
};

export function SearchProducts({ onProductSelect }: SearchProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  function handleSearch(text: string) {
    setSearchQuery(text);
    setShowResults(text.length > 0);
  }

  function getFilteredProducts() {
    return PRODUCTS.filter(product =>
      product.product.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  function handleProductSelect(product: ProductType) {
    onProductSelect(product);
    setShowResults(false);
    setSearchQuery('');
  }

  return (
    <View className="mb-4">
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search food products to add..."
        className="p-3 bg-white rounded-lg border border-gray-200"
      />

      {showResults && (
        <View className="mt-2 h-60 bg-white rounded-lg border border-gray-200">
          <FlashList
            data={getFilteredProducts()}
            estimatedItemSize={50}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleProductSelect(item)}
                className="p-3 border-b border-gray-100"
              >
                <Text>{item.product}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
} 