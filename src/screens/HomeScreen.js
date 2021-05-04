import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import {Ionicons} from '@expo/vector-icons';

const { width, height} = Dimensions.get('window');

import Block from '../components/Block';
import Title from '../components/Title';
import {prefix} from "../utils/Helpers";
import RoundBtn from "../components/RoundBtn";

const HomeScreen = (props) => {
    const {container,icon, container_2, titleContainer, roundBtnContainer} = styles;
    return (
        <View style={container}>
            <Block>
                <Ionicons name={`${prefix}-car`} style={icon}/>
                <Title content="TAXI APP" size="big"/>
            </Block>
            <View style={container_2}>
                <View style={titleContainer}>
                    <Title content="Bienvenue" size="small"/>
                    <Title content="Vous Recherchez un" size="medium"/>
                </View> 
                <View style={roundBtnContainer}>
                    <RoundBtn iconName={`${prefix}-car`}/>  
                    <RoundBtn iconName={`${prefix}-person`}/> 
                </View> 
                         
            </View>
        </View>
           
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#fff",

    },
    icon:{
        fontSize: 80,
        color: "#fff"
    },
    container_2:{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: "space-around",
      width: width 
    },
    titleContainer:{
        width: width - 80,
        height: 50,
        justifyContent: "center",
        alignItems: 'flex-start',
    },
    roundBtnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: width - 80     

    }
});

export default HomeScreen;