import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

const RefreshCardsButton = ({ fetchCardsFromNetrunnerDb }) => (
  <Menu.Item>
    <Button icon
      onClick={ fetchCardsFromNetrunnerDb }
      ><Icon name="cloud download" />
    </Button>
  </Menu.Item>
)

export default RefreshCardsButton;