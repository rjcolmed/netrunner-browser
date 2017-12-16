export default function cardsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOADING_ALL_CARDS':
      return Object.assign({}, state, { loading: true });
    case 'GET_ALL_CARDS':
      return state.concat(action.cards)
    default:
      return state;
  }
}