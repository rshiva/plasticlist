import { View, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { ProductType } from '../app/types';
import { SearchProducts } from './SearchProducts';
import { Link } from 'expo-router';

type SelectedProduct = {
  product: ProductType;
  quantity: number;
};

// type ChemicalGroup = 'phthalates' | 'bisphenols' | 'alternatives';
type ExposureLevel = 'safe' | 'moderate' | 'high';

export function ExposureCalculator() {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  function addProduct(product: ProductType) {
    const existing = selectedProducts.find(p => p.product.id === product.id);
    if (existing) {
      updateQuantity(product.id, existing.quantity + 1);
    } else {
      setSelectedProducts([...selectedProducts, { product, quantity: 1 }]);
    }
  }

  function updateQuantity(productId: string, newQuantity: number) {
    if (newQuantity === 0) {
      setSelectedProducts(selectedProducts.filter(p => p.product.id !== productId));
    } else {
      setSelectedProducts(
        selectedProducts.map(p =>
          p.product.id === productId ? { ...p, quantity: newQuantity } : p
        )
      );
    }
  }

  function calculateTotalExposure(products: SelectedProduct[]) {
    const totals = {
      DEHP: 0,
      DBP: 0,
      BBP: 0,
      DINP: 0,
      DIDP: 0,
      BPA: 0,
      BPS: 0,
      BPF: 0,
      DEHT: 0,
      DEHA: 0,
      DINCH: 0,
      DIDA: 0
    };

    products.forEach(({ product, quantity }) => {
      Object.keys(totals).forEach(chemical => {
        const value = product[`${chemical}_ng_serving`];
        let numericValue = 0;
        
        if (typeof value === 'string') {
          if (value === '<LOQ' || value === 'NO TDI' || value === 'NO RfD') {
            numericValue = 0;
          } else if (value.startsWith('<')) {
            // For values like "<3700", use half the threshold
            numericValue = parseFloat(value.substring(1)) / 2;
          } else {
            numericValue = parseFloat(value) || 0;
          }
        } else if (typeof value === 'number') {
          numericValue = value;
        }
        
        totals[chemical] += numericValue * quantity;
      });
    });

    return totals;
  }

  function getExposureLevel(value: number, chemical: string): ExposureLevel {
    // Thresholds in ng/serving
    const thresholds = {
      DEHP: { moderate: 1000, high: 2000 },
      DBP: { moderate: 800, high: 1600 },
      BPA: { moderate: 500, high: 1000 },
      // Add other chemicals as needed...
    };

    const limits = thresholds[chemical] || { moderate: 1000, high: 2000 };
    
    if (value < limits.moderate) return 'safe';
    if (value < limits.high) return 'moderate';
    return 'high';
  }

  function renderExposureSummary() {
    if (selectedProducts.length === 0) return null;

    const totals = calculateTotalExposure(selectedProducts);

    return (
      <SafeAreaView className="mt-6 ">
        <Text className="text-xl font-bold mb-4">Total Daily Exposure</Text>

        {/* Phthalates */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <Text className="text-lg font-semibold mb-2">Phthalates</Text>
          {Object.entries(totals)
            .filter(([key]) =>
              ["DEHP", "DBP", "BBP", "DINP", "DIDP"].includes(key)
            )
            .map(([chemical, value]) => {
              const level = getExposureLevel(value, chemical);
              return (
                <View
                  key={chemical}
                  className="flex-row justify-between items-center py-1"
                >
                  <Text>{chemical}:</Text>
                  <View className="flex-row items-center">
                    <Text
                      className={`
                      ${
                        level === "safe"
                          ? "text-green-600"
                          : level === "moderate"
                            ? "text-yellow-600"
                            : "text-red-600"
                      } mr-2
                    `}
                    >
                      {Math.round(value)} ng/serving
                    </Text>
                    <View
                      className={`w-3 h-3 rounded-full ${
                        level === "safe"
                          ? "bg-green-500"
                          : level === "moderate"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    />
                  </View>
                </View>
              );
            })}
        </View>

        {/* Bisphenols */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <Text className="text-lg font-semibold mb-2">Bisphenols</Text>
          {Object.entries(totals)
            .filter(([key]) => ["BPA", "BPS", "BPF"].includes(key))
            .map(([chemical, value]) => {
              const level = getExposureLevel(value, chemical);
              return (
                <View
                  key={chemical}
                  className="flex-row justify-between items-center py-1"
                >
                  <Text>{chemical}:</Text>
                  <View className="flex-row items-center">
                    <Text
                      className={`
                      ${
                        level === "safe"
                          ? "text-green-600"
                          : level === "moderate"
                            ? "text-yellow-600"
                            : "text-red-600"
                      } mr-2
                    `}
                    >
                      {Math.round(value)} ng/serving
                    </Text>
                    <View
                      className={`w-3 h-3 rounded-full ${
                        level === "safe"
                          ? "bg-green-500"
                          : level === "moderate"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    />
                  </View>
                </View>
              );
            })}
        </View>

        {/* Alternative Plasticizers */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <Text className="text-lg font-semibold mb-2">
            Alternative Plasticizers
          </Text>
          {Object.entries(totals)
            .filter(([key]) => ["DEHT", "DEHA", "DINCH", "DIDA"].includes(key))
            .map(([chemical, value]) => {
              const level = getExposureLevel(value, chemical);
              return (
                <View
                  key={chemical}
                  className="flex-row justify-between items-center py-1"
                >
                  <Text>{chemical}:</Text>
                  <View className="flex-row items-center">
                    <Text
                      className={`
                      ${
                        level === "safe"
                          ? "text-green-600"
                          : level === "moderate"
                            ? "text-yellow-600"
                            : "text-red-600"
                      } mr-2
                    `}
                    >
                      {Math.round(value)} ng/serving
                    </Text>
                    <View
                      className={`w-3 h-3 rounded-full ${
                        level === "safe"
                          ? "bg-green-500"
                          : level === "moderate"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    />
                  </View>
                </View>
              );
            })}
        </View>

        <View className="bg-gray-50 rounded-lg p-4 mt-4">
          <Text className="text-sm text-gray-600 font-medium mb-2">
            Understanding the measurements:
          </Text>
          <View className="space-y-2">
            <Text className="text-sm text-gray-500">
              • Values marked as "&lt;LOQ" (Below Limit of Quantification) are
              counted as 0
            </Text>
            <Text className="text-sm text-gray-500">
              • Values marked as "&lt;X" (e.g., "&lt;3700") use half of that
              threshold, following common environmental sampling practice
            </Text>
            <Text className="text-sm text-gray-500">
              • "NO TDI" (No Tolerable Daily Intake) and "NO RfD" (No Reference
              Dose) are counted as 0
            </Text>
          </View>
        </View>

        <Text className="text-sm text-gray-500 mt-2">
          Values shown are total exposure across all selected products per
          serving
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-4">Exposure Calculator</Text>

        <SearchProducts onProductSelect={addProduct} />

        {/* Selected Products List */}
        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2">Selected Products</Text>
          {selectedProducts.map(({ product, quantity }) => (
            <View
              key={product.id}
              className="flex-row items-center justify-between p-3 bg-white rounded-lg mb-2"
            >
              <Link href={`/product/${product.id}`}>
                <Text className="flex-1">{product.product}</Text>
              </Link>
              <View className="flex-row items-center">
                <Pressable
                  onPress={() => updateQuantity(product.id, quantity - 1)}
                  className="px-3 py-1 bg-gray-100 rounded"
                >
                  <Text>-</Text>
                </Pressable>
                <Text className="px-3">{quantity}</Text>
                <Pressable
                  onPress={() => updateQuantity(product.id, quantity + 1)}
                  className="px-3 py-1 bg-gray-100 rounded"
                >
                  <Text>+</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        {renderExposureSummary()}
      </ScrollView>
    </SafeAreaView>
  );
} 