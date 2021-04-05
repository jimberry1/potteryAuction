import { userType } from '../../types';
import * as actions from './actionTypes';
import Firebase from 'firebase';

export const setUser = (userId: string, user: userType) => {
  return { type: actions.SET_USER, userId: userId, user: user };
};

export const setUserFromFirebaseUserSnapshot = (
  userSnapshot: Firebase.firestore.DocumentSnapshot
) => {
  return {
    type: actions.SET_USER,
    userId: userSnapshot.id,
    user: userSnapshot.data(),
  };
};
