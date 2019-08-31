import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <Jumbotron className="m-0 bg-nav-dark text-light rounded-0">
        <Row>
          <Col></Col>
          <Col className="text-center">&copy; Irvine Hacks 2019</Col>
          <Col></Col>
        </Row>
        <Row> </Row>
        <Row>
          <Col></Col>
          <Col className="text-center">Website designed and developed by Lawrence Chen</Col>
          <Col></Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Footer;
