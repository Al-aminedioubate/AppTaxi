import React from 'react';
import { Platform} from 'react-native';
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const prefix = Platform.OS === "ios" ? "ios" : "md";

const config = { 
    iosClientId: `847952291174-5eqlhmh7p1ifjnon63m1lpaiel2n7f68.apps.googleusercontent.com`,
    androidClientId: `847952291174-1qqd4iemjrc3jgl3uvlufbuskjqjcm0e.apps.googleusercontent.com`,
    iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
    androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
  };

export const auth = async () => {
    try{
       const {user, type} = await Google.logInAsync(config);
        //console.log('result', result);
        if(type === 'success'){           
            //stocker l'utilisateur dans la memoire interne
           const {name, photoUrl, email} = user;
           await AsyncStorage.setItem('user',JSON.stringify({
               name,
               photoUrl,
               email
           }));
           //naviguer vers l'ecran home
           console.log('naviguer vers home');
        }
    }catch(e){
        console.error("error auth",e);
    }
}
