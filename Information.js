import React, {useState, useEffect, useRef} from 'react';
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

import { useNavigation } from '@react-navigation/native';

import RatingsFromFBD from './RatingsFromFBD';


const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator} />;
const Information = ({ route }) => {
  const currentMovie = route.params.item;
  const posterUrl = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;

  const [starRating, setStarRating] = useState(null);

  const genreMap = {
    16: 'Animation',
    10751: 'Family',
    14: 'Fantasy',
    28: 'Action',
    12: 'Adventure',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };
  const genres =
  currentMovie.genre_ids && currentMovie.genre_ids.length > 0
    ? currentMovie.genre_ids
        .map(id => genreMap[id])
        .filter(Boolean)  
        .join(', ')
    : 'Unknown';

const year = currentMovie.release_date
  ? currentMovie.release_date.substring(0, 4)
  : 'N/A';

const navigation = useNavigation();
const lastTapRef = useRef(null);

//console.log("MOVIE DATA:", currentMovie);
  return (
    <View style={styles.container}>
        <TouchableOpacity
      style={styles.goBackButton}
      onPress={() => navigation.goBack()}
      activeOpacity={0.7}
    >
      <Image
        source={require('./assets/button.png')} 
        style={styles.goBackImage}
      />
    </TouchableOpacity>
  <View style={styles.posterContainer}>
    {currentMovie.poster_path && (
      <Image style={styles.poster} source={{ uri: posterUrl }} /> )}
  </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.overlay}>
      <View style={styles.blackTitleCard}>
        <Text style={styles.title}>{currentMovie.original_title}</Text>
        <Text style={styles.information}>{`${genres} • ${year}`}</Text>
        <View style={styles.blackDescriptionCard}>
        <Text style={styles.description}>{currentMovie.overview}</Text>
      </View>
      </View>
          </View>
      </ScrollView>
  
      <Text style={styles.heading}>
      {starRating
      ? `Rated "${currentMovie.original_title}" with ${starRating} Star${starRating > 1 ? 's' : ''}`
      : 'Tap to rate'}
      </Text>
      <RatingsFromFBD
        movieId={currentMovie.id}
        movieTitle={currentMovie.original_title}
        onRatingChange={setStarRating}
        moviePoster={currentMovie.poster_path}
        movieBackdrop={currentMovie.backdrop_path}
        movieReleaseDate={currentMovie.release_date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgb(24, 24, 24)',
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
  posterContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 590,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingTop: 450, 
  },
  title: {
    fontSize: 20,
    color: '#fff', 
    width: '100%',
    fontFamily: 'Istok Web',
    fontWeight: '400',
    marginLeft: 25,
    marginTop: 25,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
  },
  information: {
    fontSize: 17, 
    color: '#fff', 
    width: '100%',
    fontFamily: 'Istok Web',
    fontWeight: '400',
    marginLeft: 25,
    marginTop: 5,
    marginBottom: 20,

  },
  blackTitleCard: {
    width: '100%',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: 'rgba(37, 37, 37, 0.69)',
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  description: {
    fontSize: 17, 
    width: '374',
    fontFamily: 'Istok Web',
    color: '#fff', 
    fontWeight: '400',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
    marginBottom: 40,
  },
  blackDescriptionCard: {
    width: '100%',
    backgroundColor: 'rgb(24, 24, 24)',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },

  heading: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 20,
    fontFamily: 'Istok Web',
    textAlign: 'center',       
    alignSelf: 'center',       
    width: '100%', 
    color: '#fff', 
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',  
    marginBottom: 15, 
  },
  starUnselected: {
    color: '#aaa',
    },
  starSelected: {
    color: '#ffb300',
  },
  separator: {
    width: 370,
    height: 20,
    strokreWidth: .5,
    stroke: 'black',
   
  },
 
});

export default Information;
