//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddressPickup from '../components/AddressPickup';
import CustomBtn from '../components/CustomBtn';

// create a component

const ChooseLocation = (props) => {
    const navigation = useNavigation()
    const [state, setState] = useState({
        pickupCords:{},
        destinationCords: {}
    })

    const {pickupCords, destinationCords} = state
    const onDone =  () => {
        props.route.params.getCordinates({
            pickupCords,
            destinationCords
        })
      //  console.log("props>>>>",props)
     navigation.goBack()
    }
    const fetchAddressCords = (lat,lng) => {
     //   console.log("run>>>>",lat,lng)
        setState({...state,pickupCords:{
            latitude: lat,
            longitude: lng
        }})
    }
    const fetchDestinationCords = (lat,lng) => {
    //    console.log("runpppp>>>>",lat,lng)
        setState({...state,destinationCords:{
            latitude: lat,
            longitude: lng
        }})
    }
   // console.log("props>>>",props);
   // console.log("pickup>>>",pickupCords)
    //console.log("destinationCords>>>",destinationCords)

    return (
        <View style={styles.container}>
            <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{backgroundColor:"white", flex:1,padding:24}}
            >

           <AddressPickup 
           placeholderName="Enter pickup point"
           fetchAddress={fetchAddressCords}
           />
           <View style={{marginBottom:16}} />
           <AddressPickup 
           placeholderName="Enter drop point"
          fetchAddress={fetchDestinationCords}

           />
           <CustomBtn
           btnText="Done"
           btnStyle={{marginTop:24}}
           onPress={onDone}
           />
</ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
});

//make this component available to the app
export default ChooseLocation;
