import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/cards_actions.js';
import { bindActionCreators } from 'redux';
import CardsList from '../components/cards/CardsList';
import { Search, Segment, Container, Header, Message } from 'semantic-ui-react';

class FilterableCardsList extends React.Component {

  state = {
    filterText: '',
    currentlyDisplayed: []
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
    const location = this.props.history.location;

    return (
      <Container>
        { location.state && 
          <div className="message">
            { 
              location.state.favoritedCard ? 
              <Message positive>
                Added <strong>{location.state.favoritedCard.title}</strong> to your favorites
              </Message> : 
              <Message warning>
                Removed <strong>{location.state.unfavoritedCard.title}</strong> from your favorites.
              </Message>
            }
          </div>
        }
        <Segment className="filterable-cards-list">
        <Header size="huge" textAlign="center">Browse Cards</Header>
          <div>
            <Search
              onSearchChange={ this.handleOnChange }
              showNoResults={false}
              size="huge"
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