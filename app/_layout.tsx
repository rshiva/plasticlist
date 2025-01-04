import { Tabs } from "expo-router/";
import Feather from "@expo/vector-icons/Feather";


export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Products",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: "FAQ",
          tabBarIcon: ({ color, size }) => (
            <Feather name="help-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
