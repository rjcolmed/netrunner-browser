import fetch from 'isomorphic-fetch';

const NETRUNNER_DB_API = "https://netrunnerdb.com/api/";

export const getAllCards = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_ALL_CARDS' })
    return fetch(`${NETRUNNER_DB_API}/cards`)
      .then(response => response.json())
      .then(cards => dispatch({ type: 'GET_ALL_CARDS', payload: cards.data }))
      .catch(error => console.log(error))
  }
}