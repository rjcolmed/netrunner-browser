import React from 'react';
import { Button } from 'semantic-ui-react';

const AddFavoriteButton = ({ addToFavorites }) => (
  <Button onClick={ addToFavorites } fluid>
    Add To Favorites
  </Button>
)

export default AddFavoriteButton;