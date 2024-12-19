import React, { useState } from 'react';

import {
  StyleSheet,
  Image,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  TextInput

} from 'react-native';
import { initializeApp,getApp,getApps } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword,getReactNativePersistence } from "firebase/auth";


const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const Separator = () => <View style={styles.separator} />;

const Welcome = () => {  
  const navigation = useNavigation();
  
  let app;
  if (!getApps().length) {     
    app = initializeApp(firebaseConfig);
  }else{   
    app = getApp();
  }
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const login = async () => {
    const auth = getAuth();
    try {
      //console.log(email);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Main');
       
    } catch (error) {
      console.log(error);
      
      if (error.code === 'auth/user-not-found') {
        Alert.alert("Email not found.");
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert("Incorrect password.");
      } else { 
        Alert.alert("Incorrect Email/Password: ");
      }
    }
  };


return (
<View style={styles.container}>   
  <Image style={styles.logo} source={require('./assets/logo_newvers.png')} />
    <Text style={styles.title}> WELCOME </Text>
    <Text style={styles.subtitle}> A Place To Rate Your Favorites</Text>     
    <Separator />   

    <Text style={styles.fixToText2}> Email: </Text>
    <TextInput
      style={styles.login}
      value={email}
     onChangeText={setEmail}
     />

    <Text style={styles.fixToText2}> Password: </Text>
    <View style={styles.passwordContainer}>
    <TextInput
      style={styles.login}
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!passwordVisible} 
      />
     <TouchableOpacity
       onPress={() => setPasswordVisible(!passwordVisible)} 
       style={styles.showHideButton}
      >
      <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
      </View>

      <Separator /> 
      <TouchableOpacity
        style={styles.button}
        onPress={login}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('SignUp')}>
        
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
     marginVertical: 5,
  },
  fixToText2: {
    width: '100%',
    fontSize: 15
  
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
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
  },
  logo: {
    alignItems: 'center',
    marginVertical: 10,
    height: 150,
    width: 150
    
  },
  login: {
    height: 40,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  createAccountButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  createAccountText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  showHideButton: {
    position: 'absolute',
    right: 10,
    padding: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

  },
});



export default Welcome;