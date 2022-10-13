import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from './redux/Products';
import Cart from './redux/Cart';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
