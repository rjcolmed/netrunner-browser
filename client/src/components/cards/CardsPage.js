import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableCardsList from '../../containers/FilterableCardsList';
import CardShow from '../../containers/CardShow';
import FavoritesList from '../../containers/FavoritesList';

const CardsPage = () =>
  <Switch>
    <Route exact path='/cards' component={ FilterableCardsList } />
    <Route exact path='/cards/favorites' component={ FavoritesList } />
    <Route exact path='/cards/:code' component={ CardShow } />
  </Switch>

export default CardsPage;