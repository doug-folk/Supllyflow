import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Dashboard } from "../dashboard";
import { Supplier } from "../supplier";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomNavigationBar() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Dashboard}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Entypo name="home" size={size} color="#00633F" />;
            }
            return <Entypo name="home" size={size} color="#000" />;
          },
        }}
      />
      <Screen
        name="product"
        component={Dashboard}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <MaterialIcons name="inventory" size={size} color="#00633F" />
              );
            }
            return <MaterialIcons name="inventory" size={size} color="#000" />;
          },
        }}
      />
      <Screen
        name="supplier"
        component={Supplier}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <MaterialIcons name="store" size={size} color="#00633F" />
              );
            }
            return <MaterialIcons name="store" size={size} color="#000" />;
          },
        }}
      />
      <Screen
        name="settings"
        component={Dashboard}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabelStyle: {
            color: "#fff",
            fontSize: 1,
          },
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="settings-sharp" size={size} color="#00633F" />
              );
            }
            return <Ionicons name="settings-sharp" size={size} color="#000" />;
          },
        }}
      />
    </Navigator>
  );
}