import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/netrunnerdb_actions.js';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList';

class FilterableCardsList extends React.Component {
  constructor() {
    super();

    this.state = {
      filterText: ''
    }
  }

  handleOnChange = (event) => {
    const inputText = event.target.value
    this.setState({
      filterText: inputText
    });
  }

  componentDidMount() {
    if (this.props.cards.length === 0) {
      // this.props.actions.getAllCards();
      console.log('fetched cards from netrunnerDb');
    } else {
      console.log('didn\'t need to fetch');
    }
  }

  render() {
    return (
      <div>
        <h1>Filterable Cards List</h1>
        <SearchBar 
          filterText={ this.state.filterText }
          handleOnChange={ this.handleOnChange }
        />
        <CardsList cards={ this.props.cards } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.store.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableCardsList);