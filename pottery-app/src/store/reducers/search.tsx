import { searchStateType } from '../../types';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../storeUtilities';

const initialState: searchStateType = {
  materialSelection: '',
  priceSelection: '',
  sizeSelection: '',
};

const setPriceFilter = (state: any, action: any) => {
  return updateObject(state, { priceSelection: action.filter });
};

const setMaterialFilter = (state: any, action: any) => {
  return updateObject(state, { materialSelection: action.filter });
};

const setSizeFilter = (state: any, action: any) => {
  return updateObject(state, { sizeSelection: action.filter });
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PRICE_FILTER:
      return setPriceFilter(state, action);
    case actionTypes.SET_MATERIAL_FILTER:
      return setMaterialFilter(state, action);
    case actionTypes.SET_SIZE_FILTER:
      return setSizeFilter(state, action);
    default:
      return state;
  }
};

export default searchReducer;
