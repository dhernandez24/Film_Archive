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

const Separator2 = () => <View style={styles.separator2} />;
const Separator3 = () => <View style={styles.separator3} />;


const searchForMovie = async (searchText) => {
  // Here is where you will need to do an API call using an AJAX fetch
  // example from the TMDb API docs (Search / Movie):
  const url = 'https://api.themoviedb.org/3/search/movie?query=' + searchText + '&include_adult=false&language=en-US&page=1';
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
     Authorization: 'Bearer ....'
    }
  };

  let json = await fetch(url, options)
    .then(res => res.json());
    

  console.log(json);

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
          <Text style={styles.title}>Search for a Movie:</Text>
        }    
        <TextInput name='searchText'
          style={styles.searchBar}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          placeholder="Type a movie name..."
        />
        <Button
          style={styles.button}
          title="Search"
          onPress={() => {
            searchForMovie(text).then((results) => {
              setResults(results);
            });

          }}
        />
        <Separator3 /> 
        <ScrollView>
          <FlatList
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Separator2 />
          <Text style={styles.subtitle}> Rated Movies: </Text> 

        </ScrollView>   

         

    



        
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
    fontWidth: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 30,
    
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
     marginVertical: 5,
  },
  button: {
      bottom: 20,
      width: '90%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: 'black',
      backgroundColor: 'black',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
  },
  searchBar: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
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
    fontFamily: "Lucida Console", 
    fontSize: 15,
 

  },

  separator2: {
    marginVertical: 60,
    
  },
  separator3: {
  marginVertical: 5,

  },
 
});

export default Main;
