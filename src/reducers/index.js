import { combineReducers } from 'redux';

import breweriesReducer from './breweriesReducer';

export default combineReducers({
  breweries: breweriesReducer
});
