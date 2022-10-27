//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const CustomBtn = ({
    onPress = () => {},
    btnStyle = {},
    btnText

}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{...styles.btnStyle,...btnStyle}}
        >
            <Text>{btnText}</Text>

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth:1
    },
});

//make this component available to the app
export default CustomBtn;
