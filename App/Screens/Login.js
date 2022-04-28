import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');

      value === 'true' && navigation.navigate('BottomStack');
    } catch (e) {
      // error reading value
    }
  };
  const login = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      navigation.navigate('BottomStack');
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={{flex: 1}}
          value={username}
          onChangeText={setUsername}
          placeholder="Kullanıcı Adı"
          placeholderTextColor={'#a6a6a6'}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={{flex: 1}}
          value={password}
          onChangeText={setPassword}
          placeholder="Şifre"
          placeholderTextColor={'#a6a6a6'}
          secureTextEntry={!showPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Text> {showPassword ? 'Gizle' : 'Göster'} </Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 25,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
});
