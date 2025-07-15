import React, {useState, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  Image,
  View,
  SafeAreaView,
  Text,
  FlatList,
  Alert,
  Platform,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const TMDB_BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;
const Separator2 = () => <View style={styles.separator2} />;
const SeparatorColor = () => <View style={styles.separatorColor} />;
const searchForMovie = async (searchText) => {
  // Here is where you will need to do an API call using an AJAX fetch
  // example from the TMDb API docs (Search / Movie):
  const url = 'https://api.themoviedb.org/3/search/movie?query=' + searchText + '&include_adult=false&language=en-US&page=1';
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
     Authorization: `Bearer ${TMDB_BEARER_TOKEN}`
    }
  };
  
  let json = await fetch(url, options)
    .then(res => res.json());

  return json.results;
  
}

const Main = () => { 
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const route = useRoute();
  const incomingQuery = route.params?.query;
  useEffect(() => {
    if (incomingQuery) {
      setText(incomingQuery);
      searchForMovie(text).then(results => {
        const sortedResults = results.sort((a, b) => b.popularity - a.popularity);
        setResults(sortedResults);
      });
      
    }
  }, [incomingQuery]);
  const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Information', { item })}
        style={styles.resultRow}
      >
      
      <Image
  source={{
    uri: item.backdrop_path
      ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
      : item.poster_path
      ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
      : 'https://via.placeholder.com/500x281?text=No+Image',
  }}
  style={styles.backdropImage}
/>
        <View style={styles.textWrapper}>
          <Text style={styles.listItemTitle}>
            {item.original_title || item.title || 'Untitled'}
          </Text>
          <Text style={styles.listItemDate}>{item.release_date || 'Unknown'}</Text>
        </View>
  
        <Text style={styles.threeDots}>•••</Text>
      </TouchableOpacity>
    );
  };
  


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {results.length === 0 && <Text style={styles.title}>Search</Text>}
  
        <View style={styles.blackHeader}>
          <Image source={require('./assets/icon_logo.png')} style={styles.logo} /> 
          <View style={styles.searchSection}>
            <Image source={require('./assets/search.png')} style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.whiteSearchBar}
              value={text}
              onChangeText={setText}
              returnKeyType="search"
              onSubmitEditing={() => {
                searchForMovie(text).then(setResults);
              }}
            />

          </View>
          <TouchableOpacity>
              <Image source={require('./assets/profile.png')} style={styles.icon} />
              </TouchableOpacity>
        </View>
        <Text style={styles.welcome}>Results for "{text}":</Text>
      
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
       
      </View>
    </SafeAreaView>
  );
}  

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },    
  scrollContainer: {
    paddingBottom: 32,
  },
  blackHeader: {
    width: '100%',
    height: 100,
    backgroundColor: '#252525',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  logo: {
    width: 57,
    height: 57,
    resizeMode: 'contain',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 262,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    backgroundColor: '#fff6f6',
  },
  whiteSearchBar: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff6f6',
  },
  icon: {
    width: 32,
    height: 31,
    resizeMode: 'contain',
  },

  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 5,
    fontSize: 27,
    marginVertical: 15,
    marginTop: 20,
    
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
     marginVertical: 5,
  },
  searchBar: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    
  },
  welcome: {
    width: 317,
    height: 37,
    flexShrink: 0,
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Istok Web',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 58, 
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 15,
  },
  listItem: {
    borderTopWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#aaa',

  },
  listItemTitle: {
    fontFamily: "Istok Web", 
    fontSize: 17,
    color: 'black',
    marginBottom:5,

  },
  listItemDate: {
    fontSize: 12,
  },
 
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    
  },

  backdropImage: {
    marginLeft: 20,
    marginRight: 20,
    width: 118,
    height: 66, 
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  
  threeDots: {
    fontSize: 24,
    color: '#888',
    marginRight: 20,
  },
  
});

export default Main;
