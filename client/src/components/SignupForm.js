import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextInput from './TextInput';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }

    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    //need to have a user object to pass to whatever action i come up with
    // this.props.action.createUser(user)
  }

  render() {
    return (
      <form>
        <TextInput 
          name='username' 
          placeholder='username' 
          handleOnChange={this.handleOnChange} 
        />
        <TextInput 
          name='email' 
          placeholder='email' 
          handleOnChange={this.handleOnChange} 
        />
        <TextInput 
          name='password' 
          placeholder='password' 
          handleOnChange={this.handleOnChange}  
        />
        <TextInput 
          name='password_confirmation' 
          placeholder='password confirmation' 
          handleOnChange={this.handleOnChange} 
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default SignupForm;