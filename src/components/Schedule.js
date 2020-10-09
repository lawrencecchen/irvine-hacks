import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "../components/Section.scss";
import Header from "../components/Header";

const TimeList = props => {
  return props.timestamps.map(([time, event], index) => (
    <ListGroup.Item key={index}>
      <Row>
        <Col>{time}</Col>
        <Col>{event}</Col>
      </Row>
    </ListGroup.Item>
  ));
};

const scheduleInfo = {
  Saturday: [
    ["9:00 AM", "Check-In"],
    ["9:15 AM", "Opening Ceremony; Keynote opening speech*"],
    ["9:30 AM", "Hacking Begins; Team Formation"],
    ["9:45 AM", "Workshop #1*"],
    ["11:00 PM", "Workshop #2*"],
    ["12:15 PM", "Lunch"],
    ["1:00 PM", "Workshop #3*"],
    ["6:00 PM", "Dinner"],
    ["8:00 PM", "Project Submission on DevPost; Hacking Ends"],
    ["8:30 PM", "Closing Ceremony"],
    ["9:00 PM", "Event Ends"]
  ]
};

const Schedule = React.forwardRef((props, ref) => (
  <Container fluid className="px-0 mx-0 my-4 py-4" ref={ref}>
    <Header>
      Schedule
      <h2 className="text-center">(tentative)</h2>
    </Header>
    <Row>
      <Col></Col>
      <Col lg={10} className="mb-3">
        <ListGroup>
          <ListGroup.Item variant="primary">Saturday</ListGroup.Item>
          <TimeList timestamps={scheduleInfo.Saturday} />
        </ListGroup>
      </Col>
      <Col></Col>
    </Row>
  </Container>
));

export default Schedule;
