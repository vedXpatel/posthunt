import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from './components/Twitter';
import Login from './components/Login';
import Reddit from './components/Reddit';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Navigation from './components/Navigation';
const Stack = createNativeStackNavigator();



const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Login" >
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Reddit" component={Reddit} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
