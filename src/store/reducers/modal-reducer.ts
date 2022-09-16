import { ModalAction, ModalActionTypes, ModalState } from "../../types/modal";

const defaultState: ModalState = {
  isActive: false,
  country: null,
  confirmed: null,
  death: null,
  recovered: null,
};

export const modalReducer = (state: ModalState = defaultState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SWITCH_ON_MODAL:
      return {isActive: true, country: action.payload.country, confirmed: action.payload.confirmed, death: action.payload.death, recovered: action.payload.recovered}
    case ModalActionTypes.SWITCH_OFF_MODAL:
      return {isActive: false, country: null, confirmed: null, death: null, recovered: null}
    default:
      return state
  }
}