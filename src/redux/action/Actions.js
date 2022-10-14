
import {GET_PRODUCT_DATA,ADD_ITEM, CHANGE_LANGUAGE, CHANG_THEME, REMOVE_ITEM} from '../ActionTypes';
import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products';
export const getProductData = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${baseURL}`);
      

      if (res.data) {
       // console.log("DATA>>>>>",res);
        dispatch({
          type: GET_PRODUCT_DATA,
          payload: res.data,
        });
      } else {
          console.log("<<<unable to fetch api>>>");
      }
    }
    
  } catch (error) {
    console.log(error);
  }
}

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
