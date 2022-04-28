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
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={() => logout()}>
        <Text style={styles.buttonText}>ÇIKIŞ YAP</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 25,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#3c6bfa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});
