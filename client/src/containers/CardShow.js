import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as actions from '../actions/favorites_actions'
import Card from '../components/Card';

class CardShow extends React.Component {

  addToFavorites = event => {
    const { actions, card, history } = this.props

    event.preventDefault();
    actions.addToFavorites(card)
      .then(history.push('/cards', { favoritedCard: card }));
  }

  removeFromFavorites = event => {
    const { actions, card, history } = this.props

    event.preventDefault();
    actions.removeFromFavorites(card)
    .then(history.push('/cards', { unfavoritedCard: card }));
  }

  render() {
    const { inFavorites, logged_in, card } = this.props;

    return (
      <Card 
        inFavorites={ inFavorites } 
        logged_in={ logged_in }
        addToFavorites={ this.addToFavorites }
        removeFromFavorites={ this.removeFromFavorites }
        card={ card }
      />
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const card = state.cards.find(card => card.code === match.params.code);
  const inFavorites = state.favorites.find(favorite => favorite.id === card.id)

  if(card) {
    return { 
      card: card,
      inFavorites: inFavorites,
      logged_in: state.session
    }
  } else {
    return { 
      card: {} ,
      favorites: state.favorites,
      logged_in: state.session
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    actions: bindActionCreators(actions, dispatch)
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);  

    