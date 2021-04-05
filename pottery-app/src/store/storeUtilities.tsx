import { RootStateOrAny } from 'react-redux';

export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const searchStateSelector = (state: RootStateOrAny) => state.search;

export const adminStateSelector = (state: RootStateOrAny) => state.admin;

export const userStateSelector = (state: RootStateOrAny) => state.user;
