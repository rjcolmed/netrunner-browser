import React from 'react';
import CardsListItem from './CardsListItem';

const CardsList = props => {
  function renderList() {
    const cards = props.cards.map((card, index) => 
      <CardsListItem card={ card } key={ index } />
    ) 
    return cards;
  }

  return (
    <div>
      <h3>Inside the CardsList</h3>
      {renderList()}
    </div>  
  )
}
 

export default CardsList;
