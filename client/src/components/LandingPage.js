import React from 'react';
import { Container, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LandingPage = () =>
  <Container>
    <Container className="landing-page">
    <Header size="huge">Welcome to NetrunnerDecks Browser</Header>
    <Button.Group attached="bottom">
      <Button as={ Link } to="/signup">Sign Up</Button>
      <Button as={ Link } to="/login">Log In</Button>
    </Button.Group>
  </Container>
  </Container>
export default LandingPage;