import fetch from 'isomorphic-fetch';

const NETRUNNER_DB_API = "https://netrunnerdb.com/api/2.0/public";

export const getAllCards = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_CARDS' })
    return fetch('/cards')
      .then(response => response.json())
      .then(cards => dispatch({ type: 'GET_ALL_CARDS', cards }))
      .catch(err => console.log(err))
  }
}

export const fetchAllFromNetrunnerDb = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_ALL_CARDS' })
    return fetch(`${NETRUNNER_DB_API}/cards`)
              .then(response => response.json())
              .then(cards => {
                return fetch('/cards', {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify({ cards: cards.data })
                }).catch(err => console.log(err));
              });
  }
}


