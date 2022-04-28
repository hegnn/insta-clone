import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {ScreenWidth} from '../Utils/const';

const GridPost = ({item}) => {
  return (
    <View style={styles.container}>
      {item.video ? (
        <Video
          source={item.image[0]}
          style={styles.image}
          muted={true}
          repeat={true}
        />
      ) : (
        <Image source={item.image[0]} style={styles.image} />
      )}
    </View>
  );
};

export default GridPost;

const styles = StyleSheet.create({
  container: {margin: 1, width: (ScreenWidth - 6) / 3, aspectRatio: 1},
  image: {width: '100%', height: '100%', backgroundColor: 'black'},
});
