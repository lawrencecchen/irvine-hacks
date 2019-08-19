import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './TextArticles.scss';

const Sponsors = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Jumbotron className="bg-primary m-0 rounded-0 text-light">
        <h1 className="display-4">Sponsors</h1>
      </Jumbotron>
    </Container>
  );
}

export default Sponsors;
