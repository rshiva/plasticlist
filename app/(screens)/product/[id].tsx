import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PRODUCTS } from '../../../data/products';
import { Image } from "expo-image";
import { ProductDetail } from "../../../components/ProductDetail";
export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return (
      <SafeAreaView className="flex-1 bg-[#f8fcf8] px-4 pt-8">
        <Text>Product not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f8fcf8] px-4 pt-8">
      <ProductDetail 
        product={product} 
        onBack={() => router.back()} 
      />
    </SafeAreaView>
  );
} 