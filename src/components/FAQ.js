import React from 'react';
import { Container, Jumbotron, Card, Row, Col, Accordion } from 'react-bootstrap';
import './TextArticles.scss';

const FAQ = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 mx-0 mb-3 bg-primary pt-3" ref={ref}>
    <Jumbotron className="m-0 rounded-0 text-light bg-primary">
      <h1 className="display-4 text-center">FAQ</h1>
    </Jumbotron>
    <Row>
      <Col></Col>
      <Col md={10} sm={20} xs={12}>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              What is a Hackathon?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Subtitle className="my-2 text-muted"><em>Hack + Marathon</em></Card.Subtitle>
                <Card.Text className="text-justify">
                  Irvine Hacks gathers high school students (programmers, graphic designers, interface designers, engineers, and others who may or may not have any experience) together for 24 hours to collaborate and “hack” together a functioning product! Hackathons do not necessarily deal with breaching computer systems and exploiting vulnerabilities. Instead, participants design, execute, and present a project based around a theme to compete for prizes, recognition, and to have fun in the process!
                  </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              When and Where?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Text className="text-justify">
                  Location and time are to be announced! Please check back later for details.
                  </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Who can Attend?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Text className="text-justify">
                  Anyone who is enrolled in a high school between the 9th and 12th grades may participate in Irvine Hacks.
                  </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Do I need to know how to code?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Text className="text-justify">
                  Absolutely no programming experience is necessary! A successful team consists of members with diverse expertise -- programmers to code, graphic designers to create pleasing interfaces, and managers to plan and present the final product! Workshops will be open throughout the day for...
                  </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              How can I become a sponsor?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Card.Text className="text-justify">
                  e-mail us at abc@gmail.com!
                  </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col></Col>
    </Row>
  </Container>
));

export default FAQ;
