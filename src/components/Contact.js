import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './TextArticles.scss';

const Contact = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref} >
    <Jumbotron className="bg-primary m-0 rounded-0 text-light text-center">
      <h1 className="display-4">Contact</h1>
      <p>
        Contact us at:
        </p>
    </Jumbotron>
  </Container >
));

export default Contact;