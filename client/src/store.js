import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import netrunnerDbReducer from './reducers/netrunnerdb_reducer';

const reducers = combineReducers({
  store: netrunnerDbReducer
});

const middleWare = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
)
