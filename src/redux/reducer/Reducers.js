import {GET_PRODUCT_DATA,ADD_ITEM, CHANG_THEME, REMOVE_ITEM} from '../ActionTypes';

const initState = {
  products:[],
  cart:[]
}

export const Reducers = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return {...state, products: action.payload};
    case ADD_ITEM:
      console.log("state--->",action);
      return {...state, cart:[...state.cart,action.payload]};
      case REMOVE_ITEM:
        return {...state, cart: state.cart.filter((item,index) => action.payload !== index)}
    default:
      return state;
  }
};
