import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/cards_actions.js';
import { bindActionCreators } from 'redux';
// import SearchBar from '../components/filters/SearchBar';
import CardsList from '../components/CardsList';
import { Search, Segment } from 'semantic-ui-react';

class FilterableCardsList extends React.Component {
  constructor() {
    super();

    this.state = {
      filterText: '',
      currentlyDisplayed: []
    }
  }

  componentDidMount() {
    this.props.actions.getAllCards();
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
        <Segment>
        <Segment>
          {/* <SearchBar 
            filterText={ this.state.filterText }
            handleOnChange={ this.handleOnChange }
          /> */}
          <Search
            onSearchChange={ this.handleOnChange }
            // filterText={ this.state.filterText }
            showNoResults={false }
          />
        </Segment>
        <CardsList 
          cards={ this.state.currentlyDisplayed }
        />
        </Segment>
        <button onClick={this.handleOnClick}>Get Cards From NetrunnerDB</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableCardsList);