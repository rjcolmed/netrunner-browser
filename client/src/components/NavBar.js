import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/session_actions';
import * as cardActions from '../actions/cards_actions.js';
import { Menu, Icon, Button } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (event, { name }) => this.setState({
    activeItem: name
  })

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

    const { activeItem } = this.state;

    const { logged_in } = this.props;

    return (
      <Menu stackable pointing secondary>
        <Menu.Item as={Link} to="/" name="home" active={activeItem === "home"} onClick={this.handleItemClick}>
          Home
        </Menu.Item>
        { logged_in &&
        <Menu.Item as={Link} to="/logout" onClick={ this.handleOnClick }>
          Logout
        </Menu.Item>
        }
        <Menu.Item as={Link} to="/cards" name="cards" active={activeItem === "cards"} onClick={this.handleItemClick}>
          Cards
        </Menu.Item>
        { logged_in &&
        <Menu.Item as={Link} to="/cards/favorites" name="favorites" active={activeItem === "favorites"} onClick={this.handleItemClick}>
          Favorites
        </Menu.Item>
        }
        { logged_in &&
        <Menu.Item>
          <Button icon
            onClick={ this.fetchCardsFromNetrunnerDb }
            ><Icon name="cloud download" />
          </Button>
        </Menu.Item>
        }
        </Menu>
      );
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
