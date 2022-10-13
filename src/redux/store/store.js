import {combineReducers, createStore} from 'redux';

import {Reducers} from '../reducer/Reducers';
import {ThemeReducer} from '../reducer/ThemeReducer';
import {LanguageReducer} from '../reducer/LanguageReducer';
const totalReducers = combineReducers({
  Reducers,
  ThemeReducer,
  LanguageReducer,
});
export const mystore = createStore(totalReducers);
