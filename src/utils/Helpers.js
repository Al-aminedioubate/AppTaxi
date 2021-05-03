import React from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import * as Google from 'expo-google-app-auth';

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
            //stocker l'utilisateur dans la BDD

            //stocker l'utilisateur dans la memoir interne
        }
    }catch(e){
        console.error("error auth",e);
    }
}