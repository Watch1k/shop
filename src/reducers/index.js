import { combineReducers } from 'redux';
import phonePage from './phonePage';
import phones from './phones';
import phonesPage from './phonesPage';

export default combineReducers({
  phones,
  phonesPage,
  phonePage
});