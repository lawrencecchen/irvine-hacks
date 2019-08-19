import { ListGroup } from "react-bootstrap";

[
  ['9:00 AM', 'Check-In'],
  ['11:00 AM', 'Opening Ceremony; Keynote opening speech*'],
  ['11:00 AM', 'Hacking Begins; Team Formation'],
  ['12:00 AM', 'Lunch'],
  ['1:00 PM', 'Workshop #1']
].map(([time, event]) => (
  <ListGroup.Item>
    <Row>
      <Col>{time}</Col>
      <Col>{event}</Col>
    </Row>
  </ListGroup.Item>
));
