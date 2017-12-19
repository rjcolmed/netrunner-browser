import fetch from 'isomorphic-fetch';

const NETRUNNER_DB_API = "https://netrunnerdb.com/api/2.0/public";

class CardsAPI {

  static getCards() {
    const request = new Request('/cards', {
      method: 'get'
    });

    return fetch(request)
    .then(response => response.json())
    .catch(err => console.log(err));
  }

  static fetchCards() {
    const request = new Request(`${NETRUNNER_DB_API}/cards`, {
      method: 'get'
    });

    return fetch(request)
    .then(response => response.json())
    .catch(err => console.log(err));
  }

  static sendCardsToAPI(cards) {
    const request = new Request('/cards', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({ cards: cards.data })
    })

    return fetch(request)
    .catch(err => console.log(err));
  }
}

export default CardsAPI;