import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
