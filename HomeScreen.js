import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//add backend stuff later, for rated movied
const dummyData = [
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
];

/// dummy data for recommended: 
//ask about ai recommendionation 
const dummyData2 = [
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
  { title: 'Movie_title' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.blackHeader}>
    <Image source={require('./assets/icon_logo.png')} style={styles.logo} />
    
    <View style={styles.searchSection}>
      <Image source={require('./assets/search.png')} style={styles.searchIcon} />
      <TextInput
  placeholder="Search"
  style={styles.whiteSearchBar}
  value={searchQuery}
  onChangeText={setSearchQuery}
  returnKeyType="search"
  onSubmitEditing={() => {
    navigation.navigate('Main', { query: searchQuery });
  }}
/>
    </View>

    <TouchableOpacity>
      <Image source={require('./assets/profile.png')} style={styles.icon} />
    </TouchableOpacity>
    </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.welcome}>Welcome Back, Dalila!</Text>
          <View style={styles.line} />
          <Text style={styles.subtitle}>Featured today</Text>
        </View>

        <View style={styles.redBorder}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4,5].map((_, index) => (
              <View key={index} style={styles.featuredCard} />
            ))}
            </ScrollView>
          </View>
        <View style={styles.invisibleLine} />
        <View style={styles.invisibleLine} />
        <View style={styles.ratingsHeader}>
          
        <Text style={styles.sectionTitle}>Your ratings</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RatedMoviesScreen')}>
          <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.invisibleLine} />

      <View style={styles.ratingsSection}>
      <ScrollView
        horizontal howsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {dummyData.map((item, index) => (
          <View key={index} style={styles.ratingCard}>
            <View style={styles.posterBox} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      <View style={styles.invisibleLine} />
        <Text style={styles.subtitle}>Recommended</Text>
     
      <View style={styles.ratingsSection}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {dummyData2.map((item, index) => (
          <View key={index} style={styles.ratingCard}>
            <View style={styles.posterBox} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        ))}
        
      </ScrollView>
      </View>
      <View style={styles.invisibleLine} />
      <View style={styles.invisibleLine} />
      <View style={styles.invisibleLine} />
      <View style={styles.invisibleLine} />
      <View style={styles.invisibleLine} />
      </ScrollView>
      
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
    marginTop: 20,
  },
  line: {
    width: 393.5,
    height: 1,
    backgroundColor: '#000',
    transform: [{ rotate: '-0.186deg' }],
    flexShrink: 0,
    marginLeft: 15,
  },  
  invisibleLine: {
    height: 13,
  },  
  subtitle: {
    width: 175,
    height: 29,
    flexShrink: 0,
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Istok Web',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
    marginVertical: 15,
    marginLeft: 15,
  },
  redBorder: {
    backgroundColor: '#612626',
    height: 193,
    paddingLeft: 1,
    flexShrink: 0,
    marginLeft: 10,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  
  },
  featuredCard: {
    width: 351,
    height: 155,
    backgroundColor: '#252525',
    borderRadius: 21,
    marginRight: 10,
    margin: 19,
  },

  ratingsSection: {
    backgroundColor: '#252525',
    height: 211,
    paddingVertical: 16,
    justifyContent: 'center',
    marginLeft: 15,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  
  },
  scrollContent: {
    alignItems: 'center',
  },
  ratingCard: {
    alignItems: 'center',

    marginLeft: 10,
  },
  posterBox: {
    width: 107,
    height: 137,
    backgroundColor: '#E0E0E0', 
    marginBottom: 8,
    marginLeft: 8,
  },
  movieTitle: {
    color: '#FFF',
    fontFamily: 'Istok Web',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  ratingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewMore: {
    color: '#555',
    
    fontSize: 14,
    textDecorationLine: 'underline',
  }
  
  
  
  
});

export default HomeScreen;
