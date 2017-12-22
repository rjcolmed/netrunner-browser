import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignupLink = ({ handleOnClick }) => (
  <Menu.Item 
    as={ Link } 
    to="/signup" 
    onClick={ handleOnClick }>
    Sign Up
  </Menu.Item>
)

export default SignupLink;