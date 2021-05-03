import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Google from 'expo-google-app-auth';

const { width, height} = Dimensions.get('window');

import logo from '../../assets/images/google.png';
import Title from './Title';


const LoginBtn = (props) => {
    const {logoImg, container} = styles;
    return(
        <TouchableOpacity>
            <View style={container}>
                <Title size="small" content="Google connexion"/>
                <Image source={logo} style={logoImg}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width - 80,
        alignItems: 'center',
        height: 55,
        shadowColor: "#000",  //La couleur de l'ombre
        shadowOffset: { width: 0, height: 2},  // cela definit le decalage de l'ombre
        shadowOpacity: 0.25,  //opacity de l'ombre
        shadowRadius: 3.84,
        elevation: 5,
       backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 15

    },
    logoImg:{
       width:40,
       height:40, 
    }
});

export default LoginBtn;