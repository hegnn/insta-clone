import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {Posts} from '../Data/Posts';
import Post from '../Components/Post';

const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://miro.medium.com/max/1360/1*XwGT5sRK8L-lYPMeQkUgog.png',
          }}
          style={{
            width: 100,
            height: 50,
            resizeMode: 'contain',
            marginLeft: 10,
          }}
        />
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/plus-2-math--v1.png',
            }}
          />
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/filled-like.png',
            }}
          />
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/facebook-messenger--v1.png',
            }}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Posts}
        renderItem={({item}) => <Post item={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundVideo: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {flexDirection: 'row'},
  icon: {
    height: 25,
    width: 25,
    margin: 10,
  },
});
