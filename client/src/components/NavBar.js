import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/session_actions';
import { Redirect } from 'react-router';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false
    }
  }

  handleOnClick = (event) => {
    event.preventDefault();

    this.props.actions.logOutUser()
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/login' />
    }

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
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
