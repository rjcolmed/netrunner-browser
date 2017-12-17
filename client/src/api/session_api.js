import fetch from 'isomorphic-fetch';

class SessionApi {
  static login(credentials) {
    const request = new Request('/login', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify( { user: credentials })
    });

    return fetch(request)
      .then(response => response.json())
      .catch(err => err);
  }
}

export default SessionApi;