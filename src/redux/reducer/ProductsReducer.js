import {GET_PRODUCT_DATA,ADD_ITEM, CHANG_THEME, REMOVE_ITEM} from '../ActionTypes';

const initialState = {
  products: [],

};

function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return {...state, products: action.payload};
   
    default:
      return state;
  }
}

export default ProductsReducer;