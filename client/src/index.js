import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store.js';
import registerServiceWorker from './registerServiceWorker';
import history from './history';


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/:filter?" component={ App }/>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
