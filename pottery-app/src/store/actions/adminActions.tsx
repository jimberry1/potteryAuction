import { ModalInformationType } from '../../types';
import { UPDATE_MODAL_INFORMATION } from './actionTypes';

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
