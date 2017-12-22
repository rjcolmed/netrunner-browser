import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardsList from '../components/cards/CardsList';
import * as favoritesActions from '../actions/favorites_actions'

class FavoritesList extends React.Component {

  componentDidMount() {
    this.props.favoritesActions.getFavorites();
  }

  render() {
    return (
      <div>
        <CardsList 
          cards={ this.props.favorites }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    favoritesActions: bindActionCreators(favoritesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);