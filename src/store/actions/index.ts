import * as CountriesActionCreators from './countries';
import * as ModalActionCreators from './modal';
import * as LiveSearchActionCreators from './live-search'

export default {
  ...CountriesActionCreators,
  ...ModalActionCreators,
  ...LiveSearchActionCreators
}