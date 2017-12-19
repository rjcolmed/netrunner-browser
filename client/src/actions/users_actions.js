import * as types from './action_types';
import UsersAPI from '../api/users_api';

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    user
  }
}

const createUserSuccess = () => {
  return {
    type: types.CREATE_USER_SUCCESS
  }
}

export const createUser = user => {
  return dispatch => {
    return UsersAPI.create(user)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(createUserSuccess());
    })
    .catch(error => console.log(error));
  }
}

// export const createUser = (user) => {
//   return dispatch => {
//     dispatch({ type: types.CREATING_USER });
//     return fetch('/users', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Accept': 'application/json'
//       },
//       body: JSON.stringify({ user })
//     })
//     .then(response => {
//       console.log(response);
//       sessionStorage.setItem('jwt', response.jwt);
//       dispatch(createUserSuccess());
//     })
//     .catch(err => console.log(err));
//   }
// }

// export const loginUser = (user) => {
//   return dispatch => {
//     dispatch({ type: types.LOGGING_USER_IN });
//     return fetch('/sessions', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({ user })
//     })
//     .then(response => response.json())
//     .then(user => dispatch(addUser(user)))
//     .catch(err => console.log(err));
//   }
// }