import React, {useState} from 'react';
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
  ScrollView,
  TouchableOpacity,
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
    

  //console.log(json);

  return json.results;
  
}

const Main = () => { 
  const navigation = useNavigation();
  
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Information', {"item": item});
        }}>
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{item.original_title}</Text>
          <Text style={styles.listItemDate}>{item.release_date}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  
  return (
    <View style={styles.container}>
      {results.length == 0 &&
        <Text style={styles.title}>Search</Text>
        }    
        <TextInput name='searchText'
          style={styles.searchBar}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          placeholder="Type a movie name..."
          returnKeyType="search"
          onSubmitEditing={() => {
            searchForMovie(text).then((results) => {
              setResults(results);
            });
        }}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === 'Enter') {
            searchForMovie(text).then((results) => {
              setResults(results);
            });
          }
        }}

        />
        
          
        
        <SeparatorColor />
          <FlatList
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Separator2 />
          <Text style={styles.subtitle}> Rated Movies: </Text> 
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
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

  listItem: {
    borderTopWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#aaa',

  },

  listItemTitle: {
    fontFamily: "bio rhyme", 
    fontWidth: 'bold',
    fontSize: 18,
    color: 'black',
    fontStyle: 'italic',
  },

  listItemDate: {

    fontSize: 15,
 
  },

  separator2: {
    marginVertical: 60,
    
  },
  separatorColor: {
    width: '100%',
    marginVertical: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'center',
    


  },
 
});

export default Main;
