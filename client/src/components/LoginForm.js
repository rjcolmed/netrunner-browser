import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/session_actions';
import TextInput from './TextInput';
import {  Form, Button, Container, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        username: '',
        password: ''
      },
      redirect: false
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
      .then(() => this.setState({ 
      ...this.state.credentials,
      redirect: true 
      }));
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/cards' />
    }

    return (
      <Container>
        <Form onSubmit={ this.handleOnSubmit }>
        <Header size="huge" textAlign="center">Log In</Header>
        {/* <form onSubmit={ this.handleOnSubmit }> */}
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
          <Button fluid>Submit</Button>
          {/* <button type='submit'>Submit</button> */}
        {/* </form> */}
        </Form>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sessionActions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);