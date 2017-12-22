import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const FavoriteLink = ({ activeItem, handleItemClick }) => (
  <Menu.Item 
    as={ Link } 
    to="/cards/favorites" 
    name="favorites" 
    active={ activeItem === "favorites" } 
    onClick={ handleItemClick }>
    Favorites
  </Menu.Item>
)

export default FavoriteLink;