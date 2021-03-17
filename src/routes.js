import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Clients from './pages/Clients';
import Preferences from './pages/Preferences';
import Agenda from './pages/Agenda';
import Today from './pages/Today';
import AddClient from './pages/AddClient';
import ClientDetail from './pages/ClientDetail';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={(routes) => icons(routes)}
      tabBarOptions={{
      activeTintColor: '#ec85ff',
      inactiveTintColor: 'gray',
      keyboardHidesTabBar: false,
      style: {
          position: 'absolute',
      },
      }}
    >
      <Tab.Screen name="Clientes" component={Clients} />
      <Tab.Screen name="Hoje" component={Today} />
      <Tab.Screen name="Agenda" component={Agenda} />
      <Tab.Screen name="Preferencias" component={Preferences} />
    </Tab.Navigator>
  );
}

const icons = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

      if (route.name === 'Hoje') {
          iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
    } 
      if (route.name === 'Clientes') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
      }
      if (route.name === 'Agenda') {
          iconName = focused ? 'ios-calendar' : 'ios-calendar';
      }
      if (route.name === 'Preferencias') {
          iconName = focused ? 'ios-settings' : 'ios-settings';
      }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export default function Routes() {
    return(
        <NavigationContainer>
            <RootStack.Navigator
            screenOptions={{
              headerShown: false
            }}
            >
              <RootStack.Screen name="Home" component={HomeTabs} />
              <RootStack.Screen name="Adicionar Cliente" component={AddClient} />
              <RootStack.Screen name="Informações da Cliente" component={ClientDetail} />
          </RootStack.Navigator>
        </NavigationContainer>
    )
}