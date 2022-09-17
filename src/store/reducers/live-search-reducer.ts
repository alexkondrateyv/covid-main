import { LiveSearchAction, LiveSearchTypes, LiveSearchState } from "../../types/live-search";

const defaultState: LiveSearchState = {
  value: ''
};

export const liveSearchReducer = (state: LiveSearchState = defaultState, action: LiveSearchAction): LiveSearchState => {
  switch (action.type) {
    case LiveSearchTypes.UPDATE_VALUE:
      return {value: action.payload.value}
    default:
      return state
  }
}