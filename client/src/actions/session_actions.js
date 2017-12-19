import * as types from './action_types';  
import SessionAPI from '../api/session_api';

export const loginSuccess = () => {
  return { 
    type: types.LOG_IN_SUCCESS 
  }
}

export const logInUser = (credentials) => {
  return dispatch => {
    return SessionAPI.login(credentials)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    })
    .catch(error => console.log(error));
  }
}

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  return {
    type: types.LOG_OUT
  }
}