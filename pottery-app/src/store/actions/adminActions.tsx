import { ModalInformationType } from '../../types';
import {
  AUTHENTICATE_AND_REDIRECT_USER,
  AUTHENTICATE_USER,
  UPDATE_MODAL_INFORMATION,
} from './actionTypes';

export const updateModalInformation = (
  title: string,
  body: string,
  actionButtonDescription: string
) => {
  return {
    type: UPDATE_MODAL_INFORMATION,
    title: title,
    body: body,
    actionButtonDescription: actionButtonDescription,
  };
};

export const toggleAuthenticationContainer = (showAuth: boolean) => {
  console.log('I have been called!!');
  return { type: AUTHENTICATE_USER, showAuth: showAuth };
};

export const toggleAuthContainerAndSetRedirectLink = (
  showAuth: boolean,
  redirectLink: string
) => {
  return {
    type: AUTHENTICATE_AND_REDIRECT_USER,
    showAuth: showAuth,
    redirectLink: redirectLink,
  };
};

// apparent example
// export const toggleAuthContainerAndSetRedirectLink = (
//     showAuth: boolean,
//     redirectLink: string
//   ) => {
//     // Not 100% sure about this style
//     return (dispatch: any) => {
//       dispatch({
//         type: AUTHENTICATE_AND_REDIRECT_USER,
//         showAuth: showAuth,
//         redirectLink: redirectLink,
//       });
//     };
//   };
