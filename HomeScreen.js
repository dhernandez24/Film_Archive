import React from 'react';
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

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        
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

        
        <View style={styles.contentWrapper}>
          <Text style={styles.welcome}>Welcome Back, Dalila!</Text>
          <View style={styles.line} />
          <Text style={styles.subtitle}>Featured today</Text>

          

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
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

    marginBottom: 20,
  },
  contentWrapper: {
    paddingHorizontal: 16,
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
  },
  line: {
    width: 393.5,
    height: 1,
    backgroundColor: '#000',
    transform: [{ rotate: '-0.186deg' }],
    flexShrink: 0,
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
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29, // optional: or omit if default is fine
  },
  
  
});

export default HomeScreen;
