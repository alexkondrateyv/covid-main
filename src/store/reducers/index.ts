import { combineReducers } from 'redux';

import { liveSearchReducer } from './live-search-reducer';
import { allCountriesReducer } from './countries-reducer';
import { modalReducer } from './modal-reducer';

export const rootReducer = combineReducers({
  countries: allCountriesReducer,
  modal: modalReducer,
  liveSearch: liveSearchReducer
})

export type RootState = ReturnType<typeof rootReducer>