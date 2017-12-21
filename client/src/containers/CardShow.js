import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as actions from '../actions/favorites_actions'
import { Card, Image, Button } from 'semantic-ui-react';

class CardShow extends React.Component {

  handleOnClick = event => {
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
    const { favorites, card, logged_in } = this.props 

    return (
      <Card>
        <Image src={ card.image_url }/>
        <Card.Content>
          <Card.Header>{ card.title }</Card.Header>
          <Card.Meta>{ card.flavor }</Card.Meta>
          <Card.Description>{ card.text }</Card.Description>
        </Card.Content>
        { logged_in &&
        <div>
          { favorites.find(favorite => favorite.id === card.id) ?
            <Button 
              attached="bottom" 
              onClick={ this.removeFromFavorites }
            >Remove from Favorites
            </Button> :
            <Button
              attached="bottom"
              onClick={ this.handleOnClick }
              >Add to Favorites
            </Button>
          }
        </div>
        }
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find(card => card.code === ownProps.match.params.code);

  if(card) {
    return { 
      card: card,
      favorites: state.favorites,
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