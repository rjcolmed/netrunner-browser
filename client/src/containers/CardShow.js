import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as actions from '../actions/favorites_actions'
import { Card, Image, Button } from 'semantic-ui-react';

class CardShow extends React.Component {

  handleOnClick = event => {
    event.preventDefault();
    this.props.actions.addToFavorites(this.props.card)
    .then(this.props.history.push('/cards', { favoritedCard: this.props.card }));
  }

  removeFromFavorites = event => {
    event.preventDefault();

    this.props.actions.removeFromFavorites(this.props.card)
    .then(this.props.history.push('/cards', { unfavoritedCard: this.props.card }));
  }

  render() {
    const { favorites, card } = this.props 

    if (favorites.find(favorite => favorite.id === this.props.card.id)) {
      return (
        <Card>
          <Image src={ card.image_url }/>
          <Card.Content>
            <Card.Header>{ card.title }</Card.Header>
            <Card.Meta>{ card.flavor }</Card.Meta>
            <Card.Description>{ card.text }</Card.Description>
          </Card.Content>
            <Button 
              attached="bottom" 
              onClick={ this.removeFromFavorites }
            >Remove from Favorites
            </Button>
            {/* <button onClick={ this.removeFromFavorites }>Remove from Favorites</button> */}
        </Card>
      );
    } else {
      return (
        <Card>
        <Image src={ card.image_url }/>
        <Card.Content>
          <Card.Header>{ card.title }</Card.Header>
          <Card.Meta>{ card.flavor }</Card.Meta>
          <Card.Description>{ card.text }</Card.Description>
        </Card.Content>
          <Button
            attached="bottom"
            onClick={ this.handleOnClick }
          >Add to Favorites
          </Button>
        {/* <button onClick={ this.handleOnClick }>Add to Favorites</button> */}
      </Card>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find(card => card.code === ownProps.match.params.code);

  if(card) {
    return { 
      card: card,
      favorites: state.favorites 
    }
  } else {
    return { 
      card: {} ,
      favorites: state.favorites
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return  {
    actions: bindActionCreators(actions, dispatch)
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);