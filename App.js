import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';

import * as Font from 'expo-font';

const { Navigator, Screen} = createStackNavigator();

//Importation des ecrans 
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const loadRessources = async () => {
    try{
      await Font.loadAsync({
        Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
        LeckerliOne: require("./assets/fonts/LeckerliOne-Regular.ttf")
      });
      setLoading(false);
    }catch(e){
      console.error("Error loading ressources",e);
    };

    if(loading){
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
  };
  useEffect(() => {
    loadRessources();
  }, []);
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
