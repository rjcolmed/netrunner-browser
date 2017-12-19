import fetch from 'isomorphic-fetch';

class FavoritesAPI {

  static requestHeaders() {
    return { 
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
     }
  }


  static favorite(card) {
    const request = new Request('/favorites', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Accept': 'application/json'
      }),
      body: JSON.stringify(card)
    });

    return fetch(request)
      .then(response => response)
      .catch(err => console.log(err))
  }

  static removeFavorite(card) {
    const request = new Request(`/cards/${card.id}`, {
      method: 'delete',
      headers: new Headers({
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
        'Accept': 'application/json'
      }),
      body: JSON.stringify(card)
    });

    return fetch(request)
      .then(response => response)
      .catch(err => console.log(err))
  }



  static fetchFavorites() {
    const headers = this.requestHeaders();

    const request = new Request('/favorites', {
      method: 'get',
      headers: headers
    });

    return fetch(request)
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}

export default FavoritesAPI;