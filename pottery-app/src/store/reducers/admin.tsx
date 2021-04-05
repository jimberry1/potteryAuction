import { adminStateType, ModalInformationType } from '../../types';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../storeUtilities';

const initialState: adminStateType = {
  showModal: false,
  modalInformation: { title: '', body: '', actionButtonDescription: '' },
  redirectLink: '',
};

const toggleModal = (state: any, action: any) => {
  return updateObject(state, {
    showModal: action?.show ? action.show : !state.showModal,
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
    default:
      return state;
  }
};

export default adminReducer;
