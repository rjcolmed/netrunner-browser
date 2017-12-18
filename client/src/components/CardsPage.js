import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableCardsList from '../containers/FilterableCardsList';
import CardShow from '../containers/CardShow';

const CardsPage = () =>
  <Switch>
    <Route exact path='/cards' component={ FilterableCardsList } />
    <Route exact path='/cards/favorites' component={ FilterableCardsList } />
    <Route exact path='/cards/:code' component={ CardShow } />
  </Switch>

export default CardsPage;