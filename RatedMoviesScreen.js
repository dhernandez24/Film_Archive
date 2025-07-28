import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth, db } from './FirebaseController';
import { collection, getDocs } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';


const RatedMoviesScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const ratingsRef = collection(db, 'users', user.uid, 'ratings');
        const snapshot = await getDocs(ratingsRef);

        const ratedMovies = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setResults(ratedMovies);
      } catch (error) {
        console.error('Error fetching rated movies:', error);
      }
    };

    fetchRatedMovies();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i <= rating ? 'star' : 'star-border'}
          size={18}
          color={i <= rating ? '#ffb300' : '#aaa'}
        />
      );
    }
    return <View style={{ flexDirection: 'row', marginTop: 4 }}>{stars}</View>;
  };


const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Information', { item })}
        style={styles.resultRow}
      >
      
      <Image source={{
    uri: item.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
      :item.poster_path
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
          {renderStars(item.stars || 0)}
        </View>
  
        <Text style={styles.threeDots}>•••</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
  
  <View style={styles.blackHeader}>
    <Image source={require('./assets/icon_logo.png')} style={styles.logo} />
    
    <TouchableOpacity>
      <Image source={require('./assets/profile.png')} style={styles.icon} />
    </TouchableOpacity>
    </View>
      <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 100 }}
              />

  

</SafeAreaView>


  );
};

const styles = StyleSheet.create({
  safeArea: {

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
  
  welcome: {
    width: 388,
    height: 58,
    flexShrink: 0,
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Istok Web',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 58, 
    marginLeft: 15,
  },

  icon: {
    width: 32,
    height: 31,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
    goBackButton: {
      position: 'absolute',
      top: 35,        
      left: 25,       
      width: 50,
      height:52,
      zIndex: 10,     
      flexShrink: 0,
    },
    goBackImage: {
      width: '100%',
      height: '100%',
      transform: [{ rotate: '179.656deg' }],
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

export default RatedMoviesScreen;
