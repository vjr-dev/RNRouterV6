import {ADD_ITEM, CHANGE_LANGUAGE, CHANG_THEME, REMOVE_ITEM} from '../ActionTypes';

export const addItemToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});

export const removeItemFromCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});

export const changeTheme = type => ({
  type: CHANG_THEME,
  payload: type,
});

export const changeLanguage = type => ({
  type: CHANGE_LANGUAGE,
  payload: type,
});
