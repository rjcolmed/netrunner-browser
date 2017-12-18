import * as types from '../actions/action_types';

export default function favoritesReducer(state = [], action) {
  switch ( action.type ) {
    case types.SET_FAVORITES:
      return action.favorites
    default:
      return state;
  }
}