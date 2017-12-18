import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import * as actions from '../actions/favorites_actions'

class CardShow extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false
    }
  }

  handleOnClick = event => {
    event.preventDefault();
    this.props.actions.addToFavorites(this.props.card);
  }

  removeFromFavorites = event => {
    event.preventDefault();

    this.props.actions.removeFromFavorites(this.props.card)
      .then(() => this.setState({ redirect: true }));
  }

  render() {
    const { redirect } = this.state;
    const { favorites, card } = this.props

    if ( redirect ) {
      return <Redirect to='/cards/favorites' />
    }

    if (favorites.find(favorite => favorite.id === this.props.card.id)) {
      return (
        <div>
          <h1>{ card.title }</h1>
            <button onClick={ this.removeFromFavorites }>Remove from Favorites</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{ card.title }</h1>
          <button onClick={ this.handleOnClick }>Add to Favorites</button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find(card => card.code === ownProps.match.params.code);

  if(card) {
    return { 
      card:card,
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