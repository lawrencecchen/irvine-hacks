import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Sponsors = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Jumbotron className="bg-transparent px-0 mx-0 my-4 py-4 rounded-0 text-light text-center">
      <h1 className="display-4">Sponsors</h1>
      <p>
        Help sponsor us!
      </p>
    </Jumbotron>
  </Container>
));

export default Sponsors;
