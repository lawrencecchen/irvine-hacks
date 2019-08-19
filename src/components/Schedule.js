import React from 'react';
import { Container, Jumbotron, Row, Col, ListGroup } from 'react-bootstrap';
import './TextArticles.scss';

const Schedule = () => {
  return (
    <Container fluid className="p-0 m-0 mb-3" id="schedule">
      <Jumbotron className="bg-primary m-0 rounded-0 text-light">
        <h1 className="display-4 text-center">Schedule (tentative)</h1>
      </Jumbotron>
      <Row>
        <Col></Col>
        <Col lg={5} className="mb-3">
          <ListGroup>
            <ListGroup.Item variant="primary">Saturday</ListGroup.Item>
            {
              [
                ['9:00 AM', 'Check-In'],
                ['11:00 AM', 'Opening Ceremony; Keynote opening speech*'],
                ['11:00 AM', 'Hacking Begins; Team Formation'],
                ['12:00 AM', 'Lunch'],
                ['1:00 PM', 'Workshop #1*'],
                ['2:30 PM', 'Workshop #2*'],
                ['4:00 PM', 'Workshop #3*'],
                ['6:00 PM', 'Dinner'],
                ['8:00 PM', 'Workshop #4*']
              ].map(([time, event]) => (
                <ListGroup.Item>
                  <Row>
                    <Col>{time}</Col>
                    <Col>{event}</Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
            {/* <ListGroup.Item>9:00 AM 			Check-In</ListGroup.Item> */}
          </ListGroup>
        </Col>
        <Col lg={5}>
          <ListGroup>
            <ListGroup.Item variant="primary">Sunday</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col></Col>
      </Row>
    </Container >
  );
}

export default Schedule;
