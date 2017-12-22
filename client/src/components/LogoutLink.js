import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const LogoutLink = ({ logUserOut }) => (
  <Menu.Item as={ Link } to="/logout" onClick={ logUserOut }>
    Logout
  </Menu.Item>
)

export default LogoutLink;