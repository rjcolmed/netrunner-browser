import React from 'react';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList';

class FilterableCardsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Filterable Cards List</h1>
        <SearchBar />
        <CardsList />
      </div>
    )
  }
}

export default FilterableCardsList;