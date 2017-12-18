import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/cards_actions.js';
import { bindActionCreators } from 'redux';
// import SearchBar from '../components/filters/SearchBar';
import CardsList from '../components/CardsList';
import { Search, Segment, Container, Header } from 'semantic-ui-react';

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

  render() {
    return (
      <Container>
        <Segment className="filterable-cards-list">
        <Header size="huge" textAlign="center">Browse Cards</Header>
          <div>
            {/* <SearchBar 
              filterText={ this.state.filterText }
              handleOnChange={ this.handleOnChange }
            /> */}
            <Search
              onSearchChange={ this.handleOnChange }
              // filterText={ this.state.filterText }
              showNoResults={false}
              soze="huge"
              
            />
          </div>
          <CardsList 
            cards={ this.state.currentlyDisplayed }
          />
        </Segment>
      </Container>
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