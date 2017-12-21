import React from 'react';
import { Link } from 'react-router-dom';

const CardsListItem = ({ card }) => (
  <Link 
    to={`/cards/${card.code}`}>
    { card.title }
  </Link>
)

export default CardsListItem;