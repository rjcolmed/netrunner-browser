export default function netrunnerDbReducer(state = { loading: false, cards: []}, action) {
  switch ( action.type ) {
    case 'LOADING_ALL_CARDS':
      return Object.assign({}, state, { loading: true });
    case 'GET_ALL_CARDS':
      return { loading: false, cards: action.payload } 
    default:
      return state;
  }
}