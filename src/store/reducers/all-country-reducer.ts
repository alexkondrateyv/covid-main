import { CountriesState, CountriesAcrionTypes, CountriesAction } from './../../types/countries';

const defaultState: CountriesState = {
  data: [],
  loading: false,
  error: null,
}

export const allCountriesReducer = (state = defaultState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case CountriesAcrionTypes.GET_COUNTRIES:
      return { loading: true, error: null, data: [] }
    case CountriesAcrionTypes.GET_COUNTRIES_SUCCESS:
      return { loading: false, error: null, data: action.payload.Countries }
    case CountriesAcrionTypes.GET_COUNTRIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}