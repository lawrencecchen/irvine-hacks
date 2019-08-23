import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <Jumbotron className="m-0 bg-secondary text-light rounded-0">
        <Row>
          <Col></Col>
          <Col className="text-center">Irvine Hacks</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="text-center"></Col>
          <Col></Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Footer;
