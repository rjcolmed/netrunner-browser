import React from 'react';
import { Link } from 'react-router-dom';

const CardsListItem = (props) =>
  <Link 
    to={`/cards/${props.card.code}`}>
      { props.card.title }
  </Link>

export default CardsListItem;