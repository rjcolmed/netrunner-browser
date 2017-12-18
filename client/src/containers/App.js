import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import LandingPage from '../components/LandingPage';
import CardsPage from '../components/CardsPage';

const App = () =>
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={ LandingPage } />
      <Route path="/cards" component={ CardsPage } />
      <Route path="/signup" component={ SignupForm } />
      <Route path="/login" component={ LoginForm } />
    </Switch>
  </div>

export default App;
