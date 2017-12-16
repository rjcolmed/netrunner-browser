import React from 'react';
import TextInput from './TextInput';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      input: {
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
        <div>
          {this.state.username}
          {this.state.password}
          {this.state.password_confirmation}
          {this.state.email}
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default SignupForm;