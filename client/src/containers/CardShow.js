import React from 'react';
import { connect } from 'react-redux';
 
class CardShow extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.card.title}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const card = state.store.cards.find(card => card.code === ownProps.match.params.code);

  if(card) {
    return { card }
  } else {
    return { card: {} }
  }
}

export default connect(mapStateToProps)(CardShow);