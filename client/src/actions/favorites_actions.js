import * as types from './action_types';
import FavoritesApi from '../api/favorites_api';

export const addToFavorites = card => {
  return dispatch => {
    return FavoritesApi.favorite(card)
      .then(response => response)
      .catch(err => console.log(err));
  }
}

export const removeFromFavorites = card => {
  return dispatch => {
    dispatch({ type: types.REMOVING_FROM_FAVORITES });
    return FavoritesApi.removeFavorite(card)
      .then(response => response)
      .catch(err => console.log(err));
  }
}

const setFavorites = favorites => {
  return {
    type: types.SET_FAVORITES,
    favorites
  }
}

export const getFavorites = () => {
  return dispatch => {
    return FavoritesApi.fetchFavorites()
      .then(favorites =>  {
        dispatch(setFavorites(favorites));
      })
      .catch(err => console.log(err));
  }
}


