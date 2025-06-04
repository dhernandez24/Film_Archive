import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

const RatedMoviesScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
  
  <View style={styles.blackHeader}>
    <Image source={require('./assets/icon_logo.png')} style={styles.logo} />
    
    <View style={styles.searchSection}>
      <Image source={require('./assets/search.png')} style={styles.searchIcon} />
      <TextInput placeholder="Search" style={styles.whiteSearchBar} />
    </View>

    <TouchableOpacity>
      <Image source={require('./assets/profile.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>


  <ScrollView contentContainerStyle={styles.scrollContainer}>

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
  whiteSearchBar: {
    flex: 1,
    height: '100%',
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
});

export default RatedMoviesScreen;
