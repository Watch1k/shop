import * as R from 'ramda';
import {
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), action.payload);
      return R.merge(state, newValues);
    
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), action.payload);
      return R.merge(state, moreValues);
      
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(action.payload.id, action.payload, state);
    
    default:
      return state;
  }
}