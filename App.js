import { StyleSheet, SafeAreaView, Screen, Text } from 'react-native';

import firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome'; 
import Main from './Main';
import Information from './Information';
import SignUp from './SignUp';

const Stack = createStackNavigator();


const firebaseConfig = {
  apiKey: "....",
  authDomain: "...",
  projectId: "...",
  storageBucket: "f..",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};



// if already initialized, use that one
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
//let userRef = db
  //.collection('users')
  ///.where('email', '==', 'hernandezdalila018@gmail.com');

//userRef
 // .get()
  //.then((query) => {
    //query.forEach((user) => {
     // console.log("Hello:", user.data());  
    //});
  //})
  //.catch((error) => {
    //console.log('Error querying DB:', error);
  //});




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="SignUp" component={SignUp} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
