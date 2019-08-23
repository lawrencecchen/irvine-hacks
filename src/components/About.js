import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import './About.scss';

const About = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Container className="bg-primary" fluid>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <Jumbotron className="bg-primary m-0 rounded-0 text-light">
            <h1 className="display-1">Irvine Hacks</h1>
            <p className="text-light subtitle" style={{ fontSize: "1.4em" }}>
              <strong>
                a High School Hackathon hosted by Northwood High School students.
              </strong>
            </p>
            <p className="text-light subtitle" style={{ fontSize: "1.4em" }}>
              2019 November 16 - 17
            </p>
            <p className="text-light subtitle" style={{ fontSize: "1.4em" }}>
              Venue TBD
            </p>
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </Container>
));

export default About;
