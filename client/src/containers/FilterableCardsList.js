import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/cards_actions.js';
import * as favoritesActions from '../actions/favorites_actions'
import { bindActionCreators } from 'redux';
import SearchBar from '../components/filters/SearchBar';
import CardsList from '../components/CardsList';

class FilterableCardsList extends React.Component {
  constructor() {
    super();

    this.state = {
      filterText: '',
      currentlyDisplayed: []
    }
  }

  componentDidMount() {
    if (this.props.match.url === '/cards/favorites') {
      this.props.favoritesActions.getFavorites();
    } else {
      this.props.actions.getAllCards();
    }
  }

  handleOnChange = (event) => {
    let filteredCards = this.props.cards.filter(card => {
      return card.title.toLowerCase().includes(event.target.value.toLowerCase())
    });

    this.setState({
      filterText: event.target.value,
      currentlyDisplayed: filteredCards
    });
  }

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.actions.fetchAllFromNetrunnerDb();
  }

  render() {
    return (
      <div>
        <h1>Filterable Cards List</h1>
        <SearchBar 
          filterText={ this.state.filterText }
          handleOnChange={ this.handleOnChange }
        />
        <button onClick={this.handleOnClick}>Get Cards From NetrunnerDB</button>
        <CardsList 
          cards={ this.state.currentlyDisplayed }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    favorites: state.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    favoritesActions: bindActionCreators(favoritesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableCardsList);