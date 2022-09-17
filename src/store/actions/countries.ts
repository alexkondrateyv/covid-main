import axios from "axios";

import { Dispatch } from "redux";

import { URL } from "../../constants/base-url";

import { CountriesAcrionTypes, CountriesAction } from "../../types/countries";

export const fetchCountries: any = () => {
  return async (dispatch: Dispatch<CountriesAction>) => {
    try {
      dispatch({ type: CountriesAcrionTypes.GET_COUNTRIES })
      const response = await axios.get(URL + '/summary')
      dispatch({ type: CountriesAcrionTypes.GET_COUNTRIES_SUCCESS, payload: response.data })
    } catch {
      dispatch({
        type: CountriesAcrionTypes.GET_COUNTRIES_ERROR,
        payload: 'Something goes wrong!'
      })
    }
  }
}