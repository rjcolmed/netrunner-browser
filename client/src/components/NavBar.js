import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/session_actions';
import * as cardActions from '../actions/cards_actions.js';
import { Menu, Icon, Button } from 'semantic-ui-react';

class NavBar extends React.Component {

  handleOnClick = event => {
    event.preventDefault();

    this.props.actions.logOutUser();
    this.props.history.push('/');
  }

  fetchCardsFromNetrunnerDb =  (event) => {
    event.preventDefault();

    this.props.cardActions.fetchAllFromNetrunnerDb();
  }

  render() {
    if (this.props.logged_in) {
      return (
        <Menu stackable pointing secondary>
          <Menu.Item>
            <NavLink
              exact to="/"
              >Home
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              exact to="/logout"
              onClick={ this.handleOnClick }
              >Logout
            </NavLink>
            </Menu.Item>
          <Menu.Item>
            <NavLink
              exact to="/cards"
              >Cards
            </NavLink>
            </Menu.Item>
          <Menu.Item>
            <NavLink
              exact to="/cards/favorites"
              >Favorites
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <Button icon
              onClick={ this.fetchCardsFromNetrunnerDb }
              ><Icon name="cloud download" />
            </Button>
          </Menu.Item>
         </Menu>
        );
    } else {
      return (
        <Menu>
          <Menu.Item>
            <NavLink
              exact to="/"
              >Home
            </NavLink>
            </Menu.Item>
          <Menu.Item>
            <NavLink
              exact to="/login"
              >Login
            </NavLink>
            </Menu.Item>
          <Menu.Item>
            <NavLink
              exact to="/signup"
              >Sign Up
            </NavLink>
          </Menu.Item>
        </Menu>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    logged_in: state.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
    cardActions: bindActionCreators(cardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
