import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import SchoolScreen from "./screens/SchoolScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#D4F1F4",
            tabBarActiveBackgroundColor: "#05445E",
            tabBarInactiveTintColor: "#ddd",
            tabBarInactiveBackgroundColor: "#333",
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Skills"
            component={SkillsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="School"
            component={SchoolScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="school" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
