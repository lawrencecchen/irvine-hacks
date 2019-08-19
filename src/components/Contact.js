import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './TextArticles.scss';

const Sponsors = () => {
  return (
    <Container fluid className="p-0 m-0" id="contact">
      <Jumbotron className="bg-primary m-0 rounded-0 text-light text-center">
        <h1 className="display-4">Contact</h1>
        <p>
          Contact us at:
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Sponsors;
