import { combineReducers } from 'redux';

import { allCountriesReducer } from './countries-reducer';
import { modalReducer } from './modal-reducer';

export const rootReducer = combineReducers({
  countries: allCountriesReducer,
  modal: modalReducer,
})

export type RootState = ReturnType<typeof rootReducer>