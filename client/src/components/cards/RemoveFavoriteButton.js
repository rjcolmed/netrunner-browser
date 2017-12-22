import React from 'react';
import { Button } from 'semantic-ui-react';

const RemoveFavoriteButton = ({ removeFromFavorites }) => (
  <Button onClick={ removeFromFavorites } fluid>
    Remove from Favorites
  </Button>
)

export default RemoveFavoriteButton;