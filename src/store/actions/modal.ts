import { Dispatch } from "redux";

import { ModalAction, ModalActionTypes } from './../../types/modal';

export const turnOnModal: any = (countryName: string, totalConfirmed: number, totalDeath: number, totalRecovered: number) => {
  return (dispatch: Dispatch<ModalAction>) => {
    dispatch({
      type: ModalActionTypes.SWITCH_ON_MODAL,
      payload: {
        isActive: true,
        country: countryName,
        confirmed: totalConfirmed,
        death: totalDeath,
        recovered: totalRecovered,
      }
    })
  }
}

export const turnOffModal: any = () => {
  return (dispatch: Dispatch<ModalAction>) => {
    dispatch({ type: ModalActionTypes.SWITCH_OFF_MODAL, payload: false })
  }
}