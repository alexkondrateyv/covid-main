export interface ModalState {
  isActive: boolean;
  country: string | null;
  confirmed: number | null;
  death: number | null;
  recovered: number | null;
}

export enum ModalActionTypes {
  SWITCH_ON_MODAL = 'SWITCH_ON_MODAL',
  SWITCH_OFF_MODAL = 'SWITCH_OFF_MODAL',
}

interface SwitchOnAction {
  type: ModalActionTypes.SWITCH_ON_MODAL;
  payload: {
    isActive: boolean,
    country: string,
    confirmed: number,
    death: number,
    recovered: number,
  };
}

interface SwitchOffAction {
  type: ModalActionTypes.SWITCH_OFF_MODAL;
  payload: false;
}

export type ModalAction = SwitchOnAction | SwitchOffAction;