// import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font"; // import this hook
import AppLoading from "expo-app-loading";

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import SchoolScreen from "./screens/SchoolScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  // Load the fonts
  const [fontsLoaded] = useFonts({
    "noto-sans": require("./assets/fonts/noto-sans/NotoSans-Regular.ttf"),
    "ubuntu-regular": require("./assets/fonts/ubuntu/Ubuntu-Regular.ttf"),
  });

  // If fonts have not loaded yet, return AppLoading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#170f0f" },
            headerTintColor: "white",
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "#610000",
            tabBarInactiveTintColor: "#ddd",
            tabBarInactiveBackgroundColor: "#170f0f",
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
