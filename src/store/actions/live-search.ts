import { Dispatch } from "redux";

import { LiveSearchAction, LiveSearchTypes } from './../../types/live-search';

export const updateSearch = (newValue: string) => {
  return (dispatch: Dispatch<LiveSearchAction>) => {
    dispatch({
      type: LiveSearchTypes.UPDATE_VALUE,
      payload: {
        value: newValue
      }
    })
  }
}