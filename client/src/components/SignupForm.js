import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../actions/users_actions'
import TextInput from './TextInput';
import {  Form, Button, Container, Header } from 'semantic-ui-react';

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
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state.user)
    .then(() => this.props.history.push('/cards'));
  }

  render() {
    
    return (
      <Container>
        <Form onSubmit={ this.handleOnSubmit }>
          <Header size="huge" textAlign="center">Sign Up</Header>
          <TextInput 
            name='username' 
            placeholder='username' 
            handleOnChange={this.handleOnChange}
            value={ this.state.user.username }
          />
          <TextInput 
            name='email' 
            placeholder='email' 
            handleOnChange={this.handleOnChange} 
            value={ this.state.user.email }
          />
          <TextInput 
            name='password' 
            placeholder='password' 
            handleOnChange={this.handleOnChange}
            value={ this.state.user.password }
          />
          <TextInput 
            name='password_confirmation' 
            placeholder='password confirmation' 
            handleOnChange={ this.handleOnChange }
            value={ this.state.user.password_confirmation }
          />
          <Button fluid>Sign Up</Button>
        </Form>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: bindActionCreators(createUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignupForm);