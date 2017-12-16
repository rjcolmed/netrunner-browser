import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from './reducers/cards_reducer';
import favoritesReducer from './reducers/favorites_reducer';
import usersReducer from './reducers/users_reducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  favorites: favoritesReducer,
  user: usersReducer
});

const middleWare = [thunk];

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
)
