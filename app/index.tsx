import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import "../global.css";

export default function App() {
  return (
      <View className="flex-1 bg-white px-4 pt-8">
      <Text className="text-3xl font-bold mb-4">Product</Text>

      <View className="flex-row items-center bg-[#f0f9f0] rounded-lg p-3 mb-6">
        <TextInput 
          placeholder="Search food products"
          className="flex-1 ml-2 text-base"
          placeholderTextColor="#666"
        />
      </View>
    </View>
  );
}
