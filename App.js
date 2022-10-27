/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 import { NavigationContainer } from '@react-navigation/native';
 import Home from './src/Screens/Home';
 import ChooseLocation from './src/Screens/ChooseLocation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 
 const Stack = createNativeStackNavigator()
 
 const App = () => {
   
   return (
     
      <NavigationContainer>
        <Stack.Navigator>
     <Stack.Screen
     name='Home'
     component={Home}
     />
     <Stack.Screen
     name='ChooseLocation'
     component={ChooseLocation}
     />
     </Stack.Navigator>
      </NavigationContainer>
   
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 