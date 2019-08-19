import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import About from './About';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import Footer from './Footer';
import Schedule from './Schedule';
import './FullScrollContent.scss';

const FullScrollContent = ({ match }) => {
  return (
    <Container fluid className="m-0 p-0 bg-primary">
      <About />
      {/* <Sponsors /> */}
      <FAQ />
      <Schedule />
      <Footer />
    </Container>
  );
}

export default FullScrollContent;
