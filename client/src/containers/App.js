import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MenuBar from '../components/menu/MenuBar';
import SignupForm from '../components/forms/SignupForm';
import LoginForm from '../components/forms/LoginForm';
import LandingPage from '../components/LandingPage';
import CardsPage from '../components/cards/CardsPage';
import './App.css'

const App = (props) =>
  <div>
    <MenuBar history={ props.history } />
    <Switch>
      <Route exact path="/" component={ LandingPage } />
      <Route path="/cards" component={ CardsPage } />
      <Route path="/signup" component={ SignupForm } />
      <Route path="/login" component={ LoginForm } />
    </Switch>
  </div>

export default App;
