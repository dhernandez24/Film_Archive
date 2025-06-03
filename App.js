import { StyleSheet, SafeAreaView, Text } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome'; 
import Main from './Main';
import Information from './Information';
import SignUp from './SignUp';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();






export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="SignUp" component={SignUp} />

    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
