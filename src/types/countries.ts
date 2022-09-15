export interface CountriesState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum CountriesAcrionTypes {
  GET_COUNTRIES = "GET_COUNTRIES",
  GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS",
  GET_COUNTRIES_ERROR = "GET_COUNTRIES_ERROR",
}

interface GetCountriesAction {
  type: CountriesAcrionTypes.GET_COUNTRIES;
}
interface GetCountriesActionSuccess {
  type: CountriesAcrionTypes.GET_COUNTRIES_SUCCESS;
  payload: {
    Countries: [
      {
        Country: string;
        CountryCode: string;
        Date: string;
        ID: string;
        NewConfirmed: number;
        NewDeaths: number;
        NewRecovered: number;
        Premium: {};
        Slug: string;
        TotalConfirmed: number;
        TotalDeaths: number;
        TotalRecovered: number;
      }
    ]
    Date: string;
    Global: {};
    ID: string;
    Message: string;
  }
}
interface GetCountriesActionError {
  type: CountriesAcrionTypes.GET_COUNTRIES_ERROR;
  payload: string;
}

export type CountriesAction = GetCountriesAction | GetCountriesActionSuccess | GetCountriesActionError;