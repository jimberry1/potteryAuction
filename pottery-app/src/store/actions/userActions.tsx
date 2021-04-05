import { userType } from '../../types';
import * as actions from './actionTypes';

export const setUser = (userId: string, user: userType) => {
  return { type: actions.SET_USER, userId: userId, user: user };
};
