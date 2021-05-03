import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Title = ({content, size }) => {
    const {container, title, small, medium} = styles;
    const getTitleStyle = () => {
        switch(size) {
            case 'big':
                return title;
                case 'small':
                    return small;
                    case 'medium':
                        return medium;
        }
    };
    return (
        <View style={container}>
            <Text style={getTitleStyle()}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    small:{
       color: "gray",
       fontFamily: "Poppins",
       fontSize: 15,
       fontWeight: "700",
       lineHeight: 28 
    },
    medium:{
        //fontFamily: "Poppins",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 28 ,
    }
});

export default Title;

