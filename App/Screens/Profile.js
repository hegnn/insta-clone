import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const logout = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false');
      navigation.navigate('Login');
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaView>
      <Text>asdasd</Text>
      <Pressable onPress={() => logout()}>
        <Text>ÇIKIŞ</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
