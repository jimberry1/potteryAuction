import {
  SET_MATERIAL_FILTER,
  SET_PRICE_FILTER,
  SET_SIZE_FILTER,
} from './actionTypes';

export const updatePrice = (priceFilter: string) => {
  return { type: SET_PRICE_FILTER, filter: priceFilter };
};

export const updateMaterial = (materialFilter: string) => {
  return { type: SET_MATERIAL_FILTER, filter: materialFilter };
};

export const updateSize = (sizeFilter: string) => {
  return { type: SET_SIZE_FILTER, filter: sizeFilter };
};
