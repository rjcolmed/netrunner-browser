import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    }
  }

  handleOnChange = (event) => {
    const queryText = event.target.value
    this.setState({
      query: queryText
    });
  }

  render() {
    return (
      <div>
        <form>
          <input 
            onChange={this.handleOnChange} 
            type="text" 
            placeholder="Start typing..." 
          />
        </form>
        <div>
          {this.state.query}
        </div>
      </div>
     
    );
  }
}

export default SearchBar;