import * as types from './action_types';  
import SessionApi from '../api/session_api';

export const loginSuccess = () => {
  return { 
    type: types.LOG_IN_SUCCESS 
  }
}
  

export const logInUser = (credentials) => {
  return dispatch => {
    return SessionApi.login(credentials)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    })
    .catch(error => console.log(error));
  }
}