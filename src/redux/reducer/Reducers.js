import {ADD_ITEM, CHANG_THEME, REMOVE_ITEM} from '../ActionTypes';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case REMOVE_ITEM:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });

      return deleteArray;
    default:
      return state;
  }
};
