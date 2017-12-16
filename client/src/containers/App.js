import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilterableCardsList from './FilterableCardsList';
import logo from './logo.svg';
import './App.css';
import CardShow from './CardShow';
import NavBar from '../components/NavBar';
import SignupForm from '../components/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Netrunner Decks</h1>
        </header>
      <Router>
        <div>
          <NavBar />  
          <Switch>
            <Route exact path="/cards" component={ FilterableCardsList } />
            <Route exact path="/cards/favorites" component={ FilterableCardsList } />
            <Route exact path="/cards/:code" component={ CardShow } />
            <Route exact path="/signup" component={ SignupForm } />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
