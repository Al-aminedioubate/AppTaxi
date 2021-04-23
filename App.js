import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

//Importation des ecrans 
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={LoginScreen}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
