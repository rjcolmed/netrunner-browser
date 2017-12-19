import fetch from 'isomorphic-fetch';

class UsersAPI {
  static create(user) {
    const request = new Request('/users', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ user })
    });

    return fetch(request)
    .then(response => response.json())
    .catch(err => console.log(err))
  }
}

export default UsersAPI;