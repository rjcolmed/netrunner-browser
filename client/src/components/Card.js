import React from 'react';
import AddFavoriteButton from './AddFavoriteButton';
import RemoveFavoriteButton from './RemoveFavoriteButton';
import CardTemplate from './CardTemplate';

class Card extends React.Component {
  render() {
    const { addToFavorites, removeFromFavorites, inFavorites, logged_in, card } = this.props;

    const button = inFavorites ? 
    <RemoveFavoriteButton removeFromFavorites={ removeFromFavorites } /> :
    <AddFavoriteButton addToFavorites={ addToFavorites } />

    return <CardTemplate button={ button } card={ card } />
  }
}

export default Card;