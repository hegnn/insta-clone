import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Posts} from '../Data/Posts';
import GridPost from '../Components/GridPost';

const Search = () => {
  const [search, setSearch] = useState(false);
  const [data, setData] = useState(Posts.slice(0, 5));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Pressable style={styles.search} onPress={() => setSearch(true)}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-glyphs/344/search--v1.png',
            }}
            style={{width: 18, height: 18, marginRight: 10}}
          />
          <Text>Ara</Text>
        </Pressable>
      </View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        {search ? (
          <FlatList
            data={data}
            renderItem={({item}) => <GridPost item={item} />}
            numColumns={3}
            keyExtractor={(item, index) => index}
            onEndReached={() =>
              setData([...data, ...Posts.slice(data.length, data.length + 5)])
            }
            onEndReachedThreshold={0.5}
          />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            SEARCH E TIKLAYIN
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  search: {
    backgroundColor: '#d4d4d4',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
