import React, {useState, useEffect} from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

 
const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator} />;

import { useNavigation } from '@react-navigation/native';


const Information = ({ route }) => {
  console.log("On info page: ");
  console.log(route.params.item);
  const currentMovie = route.params.item;
  const posterUrl = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;
  const starRatingOptions = [1, 2, 3, 4, 5];
  const [starRating, setStarRating] = useState(null);
  const animatedButtonScale = new Animated.Value(1);


  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <ScrollView>
       {currentMovie.poster_path && (
          <Image style={styles.poster} source={{ uri: posterUrl }} />
        )}
         <Text style={styles.text}>{'Title:'}</Text>
          <Text style={styles.title}>{ currentMovie.original_title }</Text>
          <Text style={styles.text}>{'Release Date:'}</Text>
          <Text style={styles.title}>{ currentMovie.release_date }</Text>
         <Text style={styles.text}>{'Sypnosis:'}</Text>
          <Text style={styles.title}>{ currentMovie.overview }</Text>
      </ScrollView> 
      <Separator2 />
        <Text style={styles.text2}>{ currentMovie.original_title }</Text>
        <Text style={styles.heading}>{starRating ? ` Rating: ${starRating}`: 'Tap to rate'}</Text>

          <View style={styles.stars}>
            {starRatingOptions.map((option) => (
              <TouchableWithoutFeedback
                onPressIn={() => handlePressIn(option)}
                onPressOut={() => handlePressOut(option)}
                onPress={() => setStarRating(option)}
                key={option}>
                <Animated.View style={animatedScaleStyle}>
                  <MaterialIcons
                    name={starRating >= option ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= option ? styles.starSelected : styles.starUnselected}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            ))}
          </View>
         <Separator2 />
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
   
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  poster: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginVertical: 10,

    
  },
  text: {
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'space-between',
    paddingLeft: 10,
    fontSize: 15,
    marginVertical: 2, 
   
    
  },
  text2:{
    fontSize: 18,
    marginBottom: 10,
   

  },

  title: {
    fontSize: 16, 
    textAlign: 'left',
    marginVertical: 5, 
    marginHorizontal: 5, 
    borderTopWidth: 1,
    padding: 10,
    color: 'black',
    borderBottomWidth: 1,
    borderColor:'grey',
    backgroundColor: 'white', 
    
  },
 
  button: {
    bottom: 20,
    width: '70%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 7,
    marginTop: 10,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontStyle: 'italic',

  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#aaa',
    },
  starSelected: {
    color: '#ffb300',
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
  },
 
});

export default Information;