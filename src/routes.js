import React, { useState } from "react";
import AuthContext from "./contexts/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import * as auth_admin from "./services/auth_admin";
import * as auth_user from "./services/auth_user";
import Quizzes from "./pages/Quizzes";
import Preferences from "./pages/Preferences";
import painel from "./pages/Painel";
import Billboard from "./pages/Billboard";
import AddClient from "./pages/AddClient";
import Answers from "./pages/Answers";
import QuizDetails from "./pages/QuizDetails";
import QuizResults from "./pages/QuizResults";
import Login from "./pages/Login";
import BillboardDetails from "./pages/BillboardDetails";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const icons = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Painel") {
      iconName = "ios-trending-up";
    }

    if (route.name === "Placar") {
      iconName = focused ? "ios-star" : "ios-star-outline";
    }
    if (route.name === "Perfil") {
      iconName = focused ? "ios-person" : "ios-person";
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
  const [user, setUser] = useState(null);

  async function signIn(user, password) {
    let response;
    if (user.toLowerCase() == 'admin' && password.toLowerCase() == 'admin'){
      response = await auth_admin.signIn();
      setUser(response.user);
    }
    else if(user.toLowerCase() == 'user' && password.toLowerCase() == 'user') {
      response = await auth_user.signIn();
      setUser(response.user);
    }
  }

  function HomeTabs() {
    if (user.account_type == 'ADMIN') {
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
          <Tab.Screen name="Perfil" component={BillboardDetails} />
          <Tab.Screen name="Questionários" component={Quizzes} />
          <Tab.Screen name="Preferências" component={Preferences} />
        </Tab.Navigator>
      );
    }
    return (
      <Tab.Navigator
        screenOptions={(routes) => icons(routes)}
        tabBarOptions={{
          activeTintColor: "#00B3A7",
          inactiveTintColor: "gray",
          keyboardHidesTabBar: false,
        }}
      >
        <Tab.Screen name="Placar" component={Billboard} />
        <Tab.Screen name="Perfil" component={BillboardDetails} />
        <Tab.Screen name="Questionários" component={Quizzes} />
        <Tab.Screen name="Preferências" component={Preferences} />
      </Tab.Navigator>
    );
  }

  function signOut() {
    setUser(null);
  }

  if (!!!user) {
    return (
      <NavigationContainer>
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
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
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
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
          <RootStack.Screen
            name="Answers"
            component={Answers}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Informações sobre o questionário"
            component={QuizDetails}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Resultado"
            component={QuizResults}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="BillboardDetails"
            component={BillboardDetails}
            options={{
              title: "Detalhes",
            }}
          />
        </RootStack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );

}
