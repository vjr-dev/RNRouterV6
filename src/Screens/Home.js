import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const Home = ({navigation}) => {

  const [state, setState] = useState({
    pickupCords: {
      latitude: 25.3176512,
      longitude: 82.9739084,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

    },
    destinationCords: {
      latitude: 25.3112126,
      longitude: 82.9891251,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

    }
  })
    const {pickupCords, destinationCords} = state
   // const GOOGLE_MAP_KEY = "AIzaSyBQbu962qAs6xerKBC3q35eut0lnqK3wik"
    const GOOGLE_MAP_KEY = "AIzaSyCwkgkQgU3J3NlHE9KH90R19IkmT6AS_2o"
    const mapref = useRef()

    const onPressLocation = () => {
        navigation.navigate('ChooseLocation',{getCordinates: fetchValues})
    }

    const fetchValues = (data) => {
        console.log("data>>>>>>",data);
        setState({
            pickupCords: {
                latitude: data.pickupCords.latitude,
                longitude: data.pickupCords.longitude
            },
            destinationCords: {
                latitude: data.destinationCords.latitude,
                longitude: data.destinationCords.longitude
            }
        })
    }
    return (
        <View style={{flex:1}}>
        <View style={{flex:1}}>
            
            <MapView
            ref= {mapref}
           style={StyleSheet.absoluteFill}
            provider={PROVIDER_GOOGLE}
    initialRegion={pickupCords}

  >
    {/* <Marker
    coordinate={pickupCords}
    />
    <Marker
    coordinate={destinationCords}
    /> */}
    <MapViewDirections
    origin={pickupCords}
    destination={destinationCords}
    apikey={GOOGLE_MAP_KEY}
    strokeWidth={3}
    strokeColor= "hotpink"
    optimizeWaypoints={true}
    onReady = {(result) =>{mapref.current.fitToCoordinates(result.coordinates,{
      edgePadding: {
        right: 30,
        bottom: 300,
        left: 30,
        top:100
      }
    })}}
    />
    <View style={{borderWidth:1}}>
    <Text style={{fontWeight:"700", fontSize:20}}>HELLO FROM WORL</Text>
    </View>
    </MapView>
</View>
<View style={styles.bottomCard}>
    <Text>Where are you going...?</Text>
    <TouchableOpacity
    style={styles.inputStyle}
    onPress={onPressLocation}
    >
        <Text>Choose your location</Text>
    </TouchableOpacity>
</View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    bottomCard: {
        backgroundColor: 'white',
        width: '100%',
        padding:30,
        borderTopEndRadius:24,
        borderTopStartRadius:24

    },
    inputStyle: {
        backgroundColor:'white',
        borderRadius:4,
        borderWidth:1,
        alignItems:'center',
        height:48,
        justifyContent:'center',
        marginTop:16
    }
})