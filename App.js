import {View, Text} from 'react-native';
import React from 'react';
import Main from './src/Main';
import {Provider} from 'react-redux';
import {mystore} from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};

export default App;
