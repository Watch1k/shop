import {
  fetchPhones as fetchPhonesAPI,
  loadMorePhones as loadMorePhonesAPI,
  fetchPhoneById as fetchPhoneByIdAPI
} from '../api';
import { getRenderedPhonesLength } from '../selectors/selectors';
import {
  FETCH_PHONE_BY_ID_FAILURE,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_START
} from './actionTypes';

export const fetchPhones = () => async dispatch => {
  dispatch({ type: FETCH_PHONES_START });
  
  try {
    const phones = await fetchPhonesAPI();
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    });
  }
  catch (error) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: error,
      error: true
    });
  }
};

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  
  dispatch({ type: LOAD_MORE_PHONES_START });
  
  try {
    const phones = await loadMorePhonesAPI({ offset });
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    });
  }
  catch (error) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: error,
      error: true
    });
  }
};

export const fetchPhoneById = id => async dispatch => {
  dispatch({ type: FETCH_PHONE_BY_ID_START });
  
  try {
    const phone = await fetchPhoneByIdAPI(id);
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    });
  }
  catch (error) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: error,
      error: true
    });
  }
};