import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { ReactComponent as Background } from '../media/undraw_web_development_w2vv.svg';
import './Section.scss';

const About = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0 bg-gradient" ref={ref}>
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={10}>
          {/* style={{ backgroundImage: `url(${Background})` }} */}
          <Jumbotron className="bg-transparent m-0 rounded-0 text-light">
            <h1 className="display-1">Irvine Hacks</h1>
            <p className="text-light subtitle" style={{ fontSize: "1.4em" }}>
              <strong>
                a 24-hour High School Hackathon, hosted by Irvine students.
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
      <Row>
        <Background className="mx-auto" height='' />
      </Row>
    </Container>
    <Container className="text-light h4 text-justified px-4 my-5">
      Irvine Hacks is a 24-hour hackathon hosted by students at Northwood High School. Throughout the entire event, students will have the chance to learn new skills, build transformative projects, and discover an entire community of designers, builders, and innovators; an entire community of hackers.
    </Container>
  </Container>
));

export default About;
