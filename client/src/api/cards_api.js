import fetch from 'isomorphic-fetch';

class CardsAPI {

  static getCards() {
    const request = new Request('/cards', {
      method: 'get'
    });

    return fetch(request)
    .then(response => response.json())
    .catch(err => console.log(err));
  }
}

export default CardsAPI;