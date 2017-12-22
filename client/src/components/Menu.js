import React from 'react';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import SignupLink from './SignupLink';
import FavoriteLink from './FavoriteLink';
import RefreshCardsButton from './RefreshCardsButton';
import MenuTemplate from './MenuTemplate';

class Menu extends React.Component {

  render() {
    const { 
      logUserOut, 
      handleItemClick, 
      loggedIn, 
      activeItem, 
      fetchCardsFromNetrunnerDb 
    } = this.props;
    const authActions = [];

    if (loggedIn) {
      authActions.push(<LogoutLink logUserOut={ logUserOut } />);
      authActions.push(<FavoriteLink activeItem={ activeItem } handleItemClick={ handleItemClick } />)
      authActions.push(<RefreshCardsButton fetchCardsFromNetrunnerDb={ fetchCardsFromNetrunnerDb } />)
    } else {
      authActions.push(<LoginLink />)
      authActions.push(<SignupLink />)
    }

    return (
      <MenuTemplate 
        activeItem={ activeItem }
        authActions={ authActions }
        handleItemClick={ handleItemClick }
      />
    )
  }
}

export default Menu;