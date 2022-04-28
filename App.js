import {StyleSheet, Image} from 'react-native';
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

const BottomStackNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={{
                  uri: 'https://img.icons8.com/material/344/home--v5.png',
                }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ) : (
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-outlined/344/home--v2.png',
                }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/344/search--v1.png',
              }}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? 'black' : '#272a31',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={{
                  uri: 'https://img.icons8.com/material/344/administrator-male--v1.png',
                }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ) : (
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-outlined/344/administrator-male.png',
                }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
        }}
      />
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
