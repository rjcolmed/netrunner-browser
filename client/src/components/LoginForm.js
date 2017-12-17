import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/users_actions'
import TextInput from './TextInput';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  handleOnChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state.user);
  }

  render() {
    return (
      <form onSubmit={ this.handleOnSubmit }>
        <TextInput 
          name='username' 
          placeholder='username' 
          handleOnChange={this.handleOnChange}
          value={ this.state.user.username }
        />
        <TextInput 
          name='password' 
          placeholder='password' 
          handleOnChange={this.handleOnChange}
          value={ this.state.user.password }
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignupForm);