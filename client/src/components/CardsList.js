import React from 'react';
import CardsListItem from './CardsListItem';
import { List } from 'semantic-ui-react'

const CardsList = props => {
  function renderList() {
    const cards = props.cards.map((card, index) => 
      <CardsListItem card={ card } key={ index } />
    ) 
    return cards;
  }

  return (
    <List>
      { renderList() }
    </List>  
  )
}
 

export default CardsList;
