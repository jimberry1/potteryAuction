import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../storeUtilities';
import { userStateType } from '../../types';

const initialState: userStateType = {
  userId: '',
  user: {
    forename: '',
    surname: '',
    emailAddress: '',
    artistId: '',
    isAdmin: false,
    timestamp: null,
    photoURL: '',
  },
};

const setUser = (state: userStateType, action: any) => {
  return updateObject(state, {
    userId: action.userId,
    user: { ...action.user },
  });
};

const updateUserStateWithArtistId = (state: userStateType, action: any) => {
  return updateObject(state, {
    user: { ...action.user, artistId: action.artistId },
  });
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return setUser(state, action);
    case actionTypes.SET_ARTIST_ID:
      return updateUserStateWithArtistId(state, action);
    default:
      return state;
  }
};

export default userReducer;
