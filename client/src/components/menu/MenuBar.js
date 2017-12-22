import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/session_actions';
import * as cardActions from '../../actions/cards_actions.js';
import Menu from './Menu';

class MenuBar extends React.Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (event, { name }) => this.setState({
    activeItem: name
  })

  logUserOut = event => {
    this.props.actions.logOutUser();
    this.props.history.push('/');
  }

  fetchCardsFromNetrunnerDb =  (event) => {
    event.preventDefault();

    this.props.cardActions.fetchAllFromNetrunnerDb();
  }

  render() {

    const { activeItem } = this.state;
    const { loggedIn } = this.props;

    return (
      <Menu
        loggedIn={ loggedIn }
        activeItem={ activeItem }
        logUserOut={ this.logUserOut }
        handleItemClick={ this.handleItemClick }
        fetchCardsFromNetrunnerDb={ this.fetchCardsFromNetrunnerDb }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
    cardActions: bindActionCreators(cardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
