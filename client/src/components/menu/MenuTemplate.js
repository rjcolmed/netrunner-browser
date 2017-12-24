import React from 'react';
// import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MenuTemplate extends React.Component {

  render() {
    const { activeItem, handleItemClick, authActions } = this.props;

    return (
      <Menu stackable pointing secondary inverted>
        <Menu.Item 
          as= { Link } 
          to="/" name="home" 
          active={ activeItem === "home" } 
          onClick={ handleItemClick }>
          Home
        </Menu.Item>
        <Menu.Item 
          as={ Link } to="/cards" 
          name="cards" 
          active={ activeItem === "cards" } 
          onClick={ handleItemClick }>
          Cards
        </Menu.Item>
        <Menu.Menu position="right">
          { authActions }
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MenuTemplate;
