//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// create a component
const AddressPickup = ({placeholderName,fetchAddress}) => {
    const GOOGLE_MAP_KEY = "AIzaSyCwkgkQgU3J3NlHE9KH90R19IkmT6AS_2o"
        const onPressAddress = (data,details) => {
       //   console.log(details);        
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        
          fetchAddress(lat,lng)
        }
    return (
        
 <GooglePlacesAutocomplete
      placeholder={placeholderName}
      onPress={onPressAddress}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAP_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer: styles.containerStyles,
        textInput: styles.textInputStyle
      }}
    />        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    containerStyles: {
        backgroundColor:'white'
    },
    textInputStyle: {
        height:48,
        fontSize:16,
        color:'black',
        backgroundColor:"#f3f3f3"
    },
});

//make this component available to the app
export default AddressPickup;
