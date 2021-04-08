import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import questionarios from "./pages/Questionarios";
import preferencias from "./pages/Preferencias";
import painel from "./pages/Painel";
import Billboard from "./pages/Billboard";
import AddClient from "./pages/AddClient";
import Answers from "./pages/Answers";
import DetalhesQuestionario from "./pages/DetalhesQuestionario";
import BillboardDetails from "./pages/BillboardDetails";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={(routes) => icons(routes)}
      tabBarOptions={{
        activeTintColor: "#00B3A7",
        inactiveTintColor: "gray",
        keyboardHidesTabBar: false,
      }}
    >
      <Tab.Screen name="Painel" component={painel} />
      <Tab.Screen name="Placar" component={Billboard} />
      <Tab.Screen name="Questionários" component={questionarios} />
      <Tab.Screen name="Preferências" component={preferencias} />
    </Tab.Navigator>
  );
}

const icons = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Painel") {
      iconName = "ios-trending-up";
    }

    if (route.name === "Placar") {
      iconName = focused ? "ios-star" : "ios-star-outline";
    }

    if (route.name === "Questionários") {
      iconName = focused ? "ios-list-box" : "ios-list";
    }

    if (route.name === "Preferências") {
      iconName = "ios-settings";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#00B3A7",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <RootStack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Como responder" component={AddClient} />
        <RootStack.Screen name="Answers" component={Answers} />
        <RootStack.Screen
          name="Informações sobre o questionário"
          component={DetalhesQuestionario}
        />
        <RootStack.Screen
          name="BillboardDetails"
          component={BillboardDetails}
          options={{
            title: "Detalhes",
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
