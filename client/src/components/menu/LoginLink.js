import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const LoginLink = () => (
  <Menu.Item as={ Link } to="/login" onClick={ this.handleOnClick }>
    Login
  </Menu.Item>
)

export default LoginLink;