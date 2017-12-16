import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as actions from '../actions/favorites_actions'

class CardShow extends React.Component {
  handleOnClick = event => {
    event.preventDefault();

    this.props.actions.addToFavorites(this.props.card);

  }

  render() {
    return (
      <div>
        <h1>{this.props.card.title}</h1>
        <button onClick={ this.handleOnClick }>Add to Favorites</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find(card => card.code === ownProps.match.params.code);

  if(card) {
    return { card }
  } else {
    return { card: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    actions: bindActionCreators(actions, dispatch)
  }  
}
 


export default connect(mapStateToProps, mapDispatchToProps)(CardShow);