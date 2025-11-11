import React, { useState, useEffect, useRef } from 'react';
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
 
const ProfileSettings = () => {
const navigation = useNavigation();

  useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.blackHeader}>
        <Text style={styles.title}>Settings</Text>
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
    </View>

    <View style={styles.redHeader}>
      <Image source={require('./assets/Ellipse.png')} style={styles.profilePicture} />
    <Text style={styles.email}>hernandezdalila018@gmail.com</Text>
      <TouchableOpacity
                style={styles.text}
                //onPress={() => navigation.goBack()}
                activeOpacity={0.7}
              >
                 <Text style={styles.text}>Log Out</Text>
              </TouchableOpacity>
    </View>
    <Text style={styles.settingText}>Account Settings</Text>
      
    </View>



    <Text style={styles.settingText}>Profile</Text>
      
    <View style={styles.line} />
   <TouchableOpacity
           style={styles.buttonTwo}
           onPress={() => navigation.navigate('SignUp')}>
           <Text style={styles.buttonTwoText}>Change Email</Text>
           
       </TouchableOpacity>
         
    <TouchableOpacity
           style={styles.buttonTwo}
           onPress={() => navigation.navigate('SignUp')}>
           <Text style={styles.buttonTwoText}>Change Password</Text>
       </TouchableOpacity>

    <Text style={styles.settingText}>Notifications</Text>
  <View style={styles.line} />
    <Image
                  source={require('./assets/check_box.png')} 
                  style={styles.check_box}
                />
    <Text style={styles.settingText}>Delete Account</Text>
      
    <View style={styles.line} />
    <TouchableOpacity
           style={styles.buttonTwo}
           onPress={() => navigation.navigate('SignUp')}>
           <Text style={styles.buttonTwoText}>Enter Password</Text>
  
           <Image
                  source={require('./assets/arrow_drop_down.png')} 
                  style={styles.dropDown}
                />
       </TouchableOpacity>
    <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
    

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    }, 
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  blackHeader: {
    width: '100%',
    height: 90,
    backgroundColor: '#252525',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  redHeader: {
    width: '100%',
    backgroundColor: '#612626',
    height: 200,
    paddingHorizontal: 15,
  
    //flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  profilePicture:{
    marginTop: 10,
    width: 93,
    height: 93,
    resizeMode: 'contain',
  },
  title: {
      textAlign: 'center',
      fontSize: 27,
      marginHorizontal: 150,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: { width: 0, height: 4 },
      fontFamily: 'Istok Web',
  },
  email: {
      //textAlign: 'center',
       marginTop: 20,
      fontSize: 27,
      //marginHorizontal: 150,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: { width: 0, height: 4 },
      fontFamily: 'Istok Web',
  },
  text: {
     // textAlign: 'center',
      textDecorationLine: 'underline',
      marginTop: 5,
      fontSize: 12,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: { width: 0, height: 4 },
      fontFamily: 'Istok Web',
  },
  defaultText: {
      marginTop: 15,
      marginLeft: 25,
      fontSize: 15,
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      fontFamily: 'Istok Web',
  },
  settingText: {
      marginTop: 30,
      marginLeft: 25,
      fontSize: 20,
      fontFamily: 'Istok Web',
      fontWeight: 600,
  },
  button: {
    backgroundColor: '#252525',
    width: 115,
    height: 27,
    marginTop:25,
    marginLeft:155,
   
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  buttonTwo: {
    backgroundColor: '#D9D9D9',
    width: 380,
    height: 30,
    marginTop:20,
    marginLeft:25,
    borderRadius: 8,
  },
  buttonTwoText: {
    marginLeft: 10,
    marginTop: 7,
    color: '#000',
    fontSize: 12,
  },
    line: {
    width: 393.5,
    height: 1,
    backgroundColor: '#000',
    transform: [{ rotate: '-0.186deg' }],
    flexShrink: 0,
    marginLeft:25,
    marginTop: 15,
  },  
    goBackButton: {
      position: 'absolute',
      top: 20,        
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
    dropDown: {
      width: 30,
      height: 30,
      top: 0,
      position: 'absolute',
      right: 10,
      transform: [{ rotate: '-90deg' }], 
    },
    check_box: {
      width: 20,
      height: 20,
      marginTop:10,
      marginLeft:30,
    },


});

export default ProfileSettings;