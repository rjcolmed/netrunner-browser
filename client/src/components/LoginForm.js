import React from 'react';
import TextInput from './TextInput';

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <TextInput placeholder='username' />
        <TextInput placeholder='password' />
      </form>
    )
  }
}

export default LoginForm;