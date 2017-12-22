import React from 'react';
import CardsListItem from './CardsListItem';
import { Segment, Container } from 'semantic-ui-react'

const CardsList = props => {
  function renderList() {
    const cards = props.cards.map((card, index) => 
    <Segment key={ index }>
      <CardsListItem card={ card } />
    </Segment>
    ) 
    return cards;
  }

  return (
    <Container>
      <Segment.Group>
        { renderList() }
      </Segment.Group>
    </Container>
  )
}
 

export default CardsList;
