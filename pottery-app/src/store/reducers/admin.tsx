import { adminStateType, ModalInformationType } from '../../types';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../storeUtilities';

const initialState: adminStateType = {
  showModal: false,
  modalInformation: { title: '', body: '', actionButtonDescription: '' },
  redirectLink: '',
  showAuth: false,
};

const toggleModal = (state: any, action: any) => {
  return updateObject(state, {
    showModal: action?.show ? action.show : !state.showModal,
  });
};

const authenticateUser = (state: adminStateType, action: any) => {
  return updateObject(state, { showAuth: action.showAuth });
};

const authenticateUserWithRedirect = (state: adminStateType, action: any) => {
  return updateObject(state, {
    showAuth: action.showAuth,
    redirectLink: action.redirectLink,
  });
};

const updateModalInformation = (
  state: any,
  action: { type: string; modalInformation: ModalInformationType }
) => {
  return updateObject(state, {
    modalInformation: {
      title: action.modalInformation.title,
      body: action.modalInformation.body,
      actionButtonDescription: action.modalInformation.actionButtonDescription,
    },
  });
};
const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return toggleModal(state, action);
    case actionTypes.UPDATE_MODAL_INFORMATION:
      return updateModalInformation(state, action);
    case actionTypes.AUTHENTICATE_USER:
      return authenticateUser(state, action);
    case actionTypes.AUTHENTICATE_AND_REDIRECT_USER:
      return authenticateUserWithRedirect(state, action);
    default:
      return state;
  }
};

export default adminReducer;
