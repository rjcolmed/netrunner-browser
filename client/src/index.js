import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from './store.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
