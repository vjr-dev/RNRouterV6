import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {Reducers} from '../reducer/Reducers';
import {ThemeReducer} from '../reducer/ThemeReducer';
import {LanguageReducer} from '../reducer/LanguageReducer';
//import {ProductsReducer} from '../reducer/ProductsReducer';
const totalReducers = combineReducers({
  Reducers,
  ThemeReducer,
  LanguageReducer
});
export const mystore = createStore(totalReducers, applyMiddleware(thunk));
