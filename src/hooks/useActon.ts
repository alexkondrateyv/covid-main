import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as CountriesActionCreators from "../store/actions/countries";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CountriesActionCreators, dispatch);
}