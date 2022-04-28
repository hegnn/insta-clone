import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ScreenWidth} from '../Utils/const';
import Video from 'react-native-video';

const Post = ({item}) => {
  const [finished, setFinished] = useState(false);
  const myVideo = useRef();
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <View style={styles.ownerDetails}>
          <View style={styles.ownerImage} />
          <Text>{item.postOwner} </Text>
        </View>
        <Image
          style={styles.like}
          source={{
            uri: 'https://img.icons8.com/material-outlined/344/more.png',
          }}
        />
      </View>
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {item.image.map((image, index) =>
          item.video ? (
            <Video
              ref={myVideo}
              source={image}
              style={styles.image}
              muted={true}
              resizeMode="contain"
              onEnd={() => {
                setFinished(true);
              }}
            />
          ) : (
            <Image source={image} style={styles.image} key={index.toString()} />
          ),
        )}
        {finished && (
          <Pressable
            onPress={() => {
              setFinished(false);
              myVideo.current.seek(0);
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                borderWidth: 2,
              }}>
              TEKRAR
            </Text>
          </Pressable>
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.leftBottomContainer}>
          <Image
            style={styles.like}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/filled-like.png',
            }}
          />
          <Image
            style={styles.like}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/filled-topic.png',
            }}
          />
          <Image
            style={styles.like}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/filled-sent.png',
            }}
          />
        </View>
        <Image
          style={styles.like}
          source={{
            uri: 'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png',
          }}
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'pink',
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ownerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'yellow',
    borderWidth: 1,
    marginRight: 5,
  },
  bottomContainer: {
    //backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  leftBottomContainer: {
    flexDirection: 'row',
  },
  like: {
    height: 25,
    width: 25,
    margin: 2,
  },
  image: {
    width: ScreenWidth,
    aspectRatio: 1,
    backgroundColor: 'black',
  },
});
