export interface LiveSearchState {
  value: string;
}

export enum LiveSearchTypes {
  UPDATE_VALUE = "UPDATE_VALUE",
}

interface UpdateValue {
  type: LiveSearchTypes.UPDATE_VALUE;
  payload: {
    value: string;
  }
}

export type LiveSearchAction = UpdateValue;