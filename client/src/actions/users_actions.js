export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const createUser = (user) => {
  console.log(user);
  return dispatch => {
    dispatch({ type: 'CREATING_USER' });
    return fetch('/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    });
  }
}