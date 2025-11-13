import React, {useState, useEffect, useRef} from 'react';
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
import FirebaseAuth from './FirebaseController';
import { auth, db } from './FirebaseController';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';


const Separator = () => <View style={styles.separator} />; 
const Separator2 = () => <View style={styles.separator2} />; 
const DeleteAccount = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');




const handleDeleteAccount = async () => {       

    try {
        const user = auth.currentUser;
        await user.delete();
        navigation.navigate('Welcome'); 
    }

    catch (error) {
        console.log(error);
        alert("Error deleting account: " + error.message);
    }
}
  return (
    <SafeAreaView style={styles.container}>
      
    <Separator /> 
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
   
         

      <Text style={styles.title}> Deleting Account </Text>
      <Separator2 />

        <Text style={styles.fixToText2}> Deleting your account will remove your data permanently from our database.  </Text>   
        <Text style={styles.fixToText2}> This action cannot be undone. </Text>
      <Separator />
        <Separator />
         
      
      <Text style={styles.fixToText2}> To confirm this, type your current password </Text>
      <TextInput
        style={styles.login}

        placeholder="Enter your password"
      />
      

      <Separator />

      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
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
  goBackButton: {
    position: 'absolute',
    top: 40,        
    left: 5,       
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
    fontWeight: 'bold',
    fontSize: 40,
  },
  
  fixToText2: {
    width: '100%',
    fontSize: 15,
    textAlign: 'center',

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
export default DeleteAccount;