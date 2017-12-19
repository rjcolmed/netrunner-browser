import * as types from './action_types'
import CardsAPI from '../api/cards_api';



export const getAllCards = () => {
  return dispatch => {
    dispatch({ type: types.LOADING_CARDS })
    return CardsAPI.getCards()
      .then(cards => dispatch({ 
        type: types.GET_ALL_CARDS, 
        cards 
      }))
      .catch(err => console.log(err))
  }
}

export const fetchAllFromNetrunnerDb = () => {
  return dispatch => {
    dispatch({ type: types.FETCHING_ALL_CARDS })
    return CardsAPI.fetchCards()
      .then(cards => { 
        dispatch({ type: types.ADDING_CARDS_TO_API });
        CardsAPI.sendCardsToAPI(cards);
      })
      .catch(err => console.log(err));
  }
}


