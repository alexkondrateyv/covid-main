import { combineReducers } from 'redux';
import { allCountriesReducer } from './all-country-reducer';

export const rootReducer = combineReducers({
  countries: allCountriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>