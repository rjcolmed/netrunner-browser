import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../../actions/users_actions'
import TextInput from './TextInput';
import {  Form, Button, Container, Header, Message } from 'semantic-ui-react';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      passwordsMatch: true
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

  handleOnKeyUp = () => {

    this.setState({
      ...this.state.user,
      passwordsMatch: this.state.user.password === this.state.user.password_confirmation
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
        <div className="message">
        { 
          this.state.passwordsMatch ? '' :
         <Message negative><strong>Your passwords don't match!</strong></Message>
        }
        </div>
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
            handleOnKeyUp={this.handleOnKeyUp}
          />
          <TextInput 
            name='password_confirmation' 
            placeholder='password confirmation' 
            handleOnChange={ this.handleOnChange }
            value={ this.state.user.password_confirmation }
            handleOnKeyUp={this.handleOnKeyUp}
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