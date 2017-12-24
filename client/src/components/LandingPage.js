import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LandingPage = () =>
  <Container>
    <Header size="huge" textAlign="center" inverted>Welcome to NetrunnerDecks Browser</Header>
    <Container className="landing-page">
      <Button.Group attached="bottom">
        <Button as={ Link } to="/signup">Sign Up</Button>
        <Button as={ Link } to="/login">Log In</Button>
      </Button.Group>
    </Container>
  </Container>
export default LandingPage;