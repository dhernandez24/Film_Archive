import React, { useState } from 'react';
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
import FirebaseAuth from './firebase-auth-controller';


const Separator = () => <View style={styles.separator} />; 
const Separator2 = () => <View style={styles.separator2} />; 
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    try {
      const result = await FirebaseAuth.registerUser(email, password);
      Alert.alert(result.message); // Show success message
    } catch (error) {
      Alert.alert(error.message); // Show error message
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      
    <Separator /> 
      <Text style={styles.title}> Sign Up </Text>
       <Separator2 />
        <Text style={styles.subtitle}> Please Enter Your Details </Text>   
      <Separator /> 
      <View style={styles.SignUp}></View>
      <Text style={styles.fixToText2}> Full Name: </Text>
      <TextInput
        style={styles.login}
        placeholder="Enter your name"
      />
      <Text style={styles.fixToText2}> Email: </Text>
      <TextInput
        style={styles.login}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
      />
      <Text style={styles.fixToText2}> Password: </Text>
     <View style={styles.passwordContainer}>
      
     <TextInput
          style={styles.login}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
        />

        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)} 
          style={styles.showHideButton}
        >
          <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.fixToText2}> Confirm Password: </Text>
      <View style={styles.passwordContainer}>
      <TextInput
          style={styles.login}
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} 
          style={styles.showHideButton}>
          <Text>{confirmPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>


      <Separator />
      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity> 
    </SafeAreaView>
  );
};

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
  SignUp: {
    flex: 1,
    backgroundColor: '#fff',
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
  separator2: {
    marginVertical: 5,
  },
  login: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
   passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
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

export default SignUp;
