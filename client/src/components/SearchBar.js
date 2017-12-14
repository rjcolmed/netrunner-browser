import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Start typing..." />
      </form>
    );
  }
}

export default SearchBar;