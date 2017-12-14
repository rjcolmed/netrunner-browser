import React from 'react';

const SearchBar = (props) =>
    <form>
      <input 
        onChange={ props.handleOnChange } 
        type="text" 
        placeholder="Start typing..." 
      />
    </form>

export default SearchBar;