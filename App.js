import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import Feed from './App/Screens/Feed';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './App/Screens/Login';
import Search from './App/Screens/Search';
import Profile from './App/Screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const getData = () => {
  const value = AsyncStorage.getItem('isLoggedIn').then(res => res);
  return value;
};

const BottomStackNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomStack" component={BottomStackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
