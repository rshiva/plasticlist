import { Tabs } from "expo-router/";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";


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
        name="calculate"
        options={{
          title: "calculate",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calculator" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Team",
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="technical-faq"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(screens)/product/[id]"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
