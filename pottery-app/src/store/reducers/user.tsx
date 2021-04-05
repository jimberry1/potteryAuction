import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../storeUtilities';
import { userStateType } from '../../types';

const initialState: userStateType = {
  userId: '',
  user: {
    firstName: '',
    surname: '',
    emailAddress: '',
    artistUid: '',
    isAdmin: false,
  },
};

const setUser = (state: userStateType, action: any) => {
  return updateObject(state, {
    userId: action.userId,
    user: action.user,
  });
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return setUser(state, action);
    default:
      return state;
  }
};

export default userReducer;
