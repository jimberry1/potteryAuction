import { RootStateOrAny } from 'react-redux';

export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const searchStateSelector = (state: RootStateOrAny) => state.search;

export const adminStateSelector = (state: RootStateOrAny) => state.admin;
export const adminShowAuthenticationContainerSelector = (
  state: RootStateOrAny
) => state.admin.showAuth;

export const userStateSelector = (state: RootStateOrAny) => state.user;
export const userIdStateSelector = (state: RootStateOrAny) => state.user.userId;
export const userArtistIdStateSelector = (state: RootStateOrAny) =>
  state.user.user.artistUid;
