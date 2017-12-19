import * as types from '../actions/action_types';

export default function cardsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOADING_ALL_CARDS':
      return Object.assign({}, state, { loading: true });
    case types.GET_ALL_CARDS:
      return action.cards
    case types.ADDING_CARDS_TO_API:
      return state;
    default:
      return state;
  }
}