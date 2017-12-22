import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

class CardTemplate extends React.Component {
  static propTypes = {
    button: PropTypes.node,
    card: PropTypes.node
  }

  render() {
    const { card, button } = this.props;

    return (
      <Card>
        <Image src={ card.image_url } />
        <Card.Content>
          <Card.Header>{ card.title }</Card.Header>
          <Card.Meta>{ card.flavor }</Card.Meta>
          <Card.Description>{ card.text }</Card.Description>
        </Card.Content>

        <span>{ button }</span>
      </Card>
    )
  }
}

export default CardTemplate;