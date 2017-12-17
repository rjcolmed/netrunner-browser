// import * as types from './action_types';
import FavoritesApi from '../api/favorites_api';

export const addToFavorites = card => {
  return dispatch => {
    // dispatch({ type: types.ADD_TO_FAVORITES });
    return FavoritesApi.favorite(card)
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}

export const getFavorites = () => {
  return dispatch => {
    return FavoritesApi.fetchFavorites()
      .then(response => response.json())
      .then()
  }
}