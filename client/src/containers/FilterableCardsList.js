import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList';

class FilterableCardsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Filterable Cards List</h1>
        <SearchBar />
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

export default connect(mapStateToProps)(FilterableCardsList);