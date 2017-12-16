// export const addToFavorites = card => {
//   return {
//     type: 'ADD_TO_FAVORITES',
//     card
//   }
// }

// export const addToFavorites = card => {
//   return dispatch => {
//     dispatch({ type: 'ADDING_FAVORITE' });
//     return fetch('/favorites', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(card)
//     });
// }