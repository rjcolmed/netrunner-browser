import React from 'react';
import CardsListItem from './CardsListItem';
import { Segment } from 'semantic-ui-react'

const CardsList = props => {
  function renderList() {
    const cards = props.cards.map((card, index) => 
    <Segment>
      <CardsListItem card={ card } key={ index } />
    </Segment>
    ) 
    return cards;
  }

  return (
    <Segment.Group>
      { renderList() }
    </Segment.Group>
  )
}
 

export default CardsList;
