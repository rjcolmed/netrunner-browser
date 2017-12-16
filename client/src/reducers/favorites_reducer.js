export default function favoritesReducer(state = [], action) {
  switch ( action.type ) {
    case 'ADD_TO_FAVORITES':
      return state.concat(action.card)
    default:
      return state;
  }
}