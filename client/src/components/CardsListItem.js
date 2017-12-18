import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

const CardsListItem = (props) =>
  <List.Item>
    <List.Header>
      <Link 
        to={`/cards/${props.card.code}`}>
        { props.card.title }
      </Link>
    </List.Header>
  </List.Item>
  
export default CardsListItem;