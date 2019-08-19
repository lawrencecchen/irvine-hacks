import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <Jumbotron className="m-0 bg-secondary text-light rounded-0">
        Irvine Hacks
      </Jumbotron>
    </Container>
  );
}

export default Footer;
