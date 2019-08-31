import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Sponsors = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Jumbotron className="bg-transparent m-0 rounded-0 text-light text-center">
      <h1 className="display-4">Sponsors</h1>
    </Jumbotron>
  </Container>
));

export default Sponsors;
