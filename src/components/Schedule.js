import React from 'react';
import { Container, Jumbotron, Row, Col, ListGroup } from 'react-bootstrap';
import './TextArticles.scss';

const TimeList = (props) => {
  return (
    props.timestamps.map(([time, event]) => (
      <ListGroup.Item>
        <Row>
          <Col>{time}</Col>
          <Col>{event}</Col>
        </Row>
      </ListGroup.Item>
    ))
  )
}

const scheduleInfo = {
  Saturday: [
    ['9:00 AM', 'Check-In'],
    ['11:00 AM', 'Opening Ceremony; Keynote opening speech*'],
    ['11:00 AM', 'Hacking Begins; Team Formation'],
    ['12:00 AM', 'Lunch'],
    ['1:00 PM', 'Workshop #1*'],
    ['2:30 PM', 'Workshop #2*'],
    ['4:00 PM', 'Workshop #3*'],
    ['6:00 PM', 'Dinner'],
    ['8:00 PM', 'Workshop #4*']
  ],
  Sunday: [
    ['12: 00 AM', 'Midnight Snack'],
    ['2: 00 AM', 'Game Break *'],
    ['7: 00 AM', 'Breakfast'],
    ['9: 00 AM', 'Project Submission on DevPost'],
    ['10: 00 AM', 'Hacking Ends'],
    ['10: 15 AM', 'Judging(Presentation Style) '],
    ['11: 40 AM', 'Closing Ceremony'],
    ['12: 00 AM', 'Event Ends']
  ]
}

const Schedule = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 mx-0 pt-3" ref={ref}>
    <Jumbotron className="bg-primary m-0 rounded-0 text-light">
      <h1 className="display-4 text-center">Schedule (tentative)</h1>
    </Jumbotron>
    <Row>
      <Col></Col>
      <Col lg={5} className="mb-3">
        <ListGroup>
          <ListGroup.Item variant="primary">Saturday</ListGroup.Item>
          <TimeList timestamps={scheduleInfo.Saturday} />
        </ListGroup>
      </Col>
      <Col lg={5}>
        <ListGroup>
          <ListGroup.Item variant="primary">Sunday</ListGroup.Item>
          <TimeList timestamps={scheduleInfo.Sunday}></TimeList>
        </ListGroup>
      </Col>
      <Col></Col>
    </Row>
  </Container >
));

export default Schedule;
