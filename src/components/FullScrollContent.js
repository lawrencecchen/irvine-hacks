import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import About from './About';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import Footer from './Footer';
import Schedule from './Schedule';
import Contact from './Contact';
import './FullScrollContent.scss';

const FullScrollContent = () => {
  return (
    <Container fluid className="m-0 p-0 bg-primary">
      <About />
      <FAQ />
      <Schedule />
      <Sponsors />
      <Contact />
      <Footer />
    </Container>
  );
}

export default FullScrollContent;
