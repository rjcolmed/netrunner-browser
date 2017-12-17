import * as types from './action_types'

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    user
  }
}

export const createUser = (user) => {
  return dispatch => {
    dispatch({ type: types.CREATING_USER });
    return fetch('/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(user => dispatch(addUser(user)))
    .catch(err => console.log(err));
  }
}

export const loginUser = (user) => {
  return dispatch => {
    dispatch({ type: types.LOGGING_USER_IN });
    return fetch('/sessions', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(user => dispatch(addUser(user)))
    .catch(err => console.log(err));
  }
}