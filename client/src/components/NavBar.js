import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/session_actions';
import { Redirect } from 'react-router';

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
        <ul className="navBar">
          <li className="navBarLink">
            <NavLink
              exact to="/"
              >Home
            </NavLink>
          </li>
          <li className="navBarLink">
            <NavLink
              exact to="/logout"
              onClick={ this.handleOnClick }
              >Logout
            </NavLink>
          </li>
          <li>
            <NavLink
              exact to="/cards"
              >Cards
            </NavLink>
          </li>
          <li>
            <NavLink
              exact to="/cards/favorites"
              >Favorites
            </NavLink>
          </li>
         </ul>
        );
    } else {
      return (
        <ul className="navBar">
          <li className="navBarLink">
            <NavLink
              exact to="/"
              >Home
            </NavLink>
          </li>
          <li className="navBarLink">
            <NavLink
              exact to="/login"
              >Login
            </NavLink>
          </li>
          <li className="navBarLink">
            <NavLink
              exact to="/signup"
              >Sign Up
            </NavLink>
          </li>
         </ul>
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
