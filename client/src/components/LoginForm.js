import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/session_actions';
import TextInput from './TextInput';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  handleOnChange = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.sessionActions.logInUser(this.state.credentials)
  }

  render() {
    return (
      <form onSubmit={ this.handleOnSubmit }>
        <TextInput 
          name='username' 
          placeholder='username' 
          handleOnChange={this.handleOnChange}
          value={ this.state.credentials.username }
        />
        <TextInput 
          name='password' 
          placeholder='password' 
          handleOnChange={this.handleOnChange}
          value={ this.state.credentials.password }
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sessionActions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);