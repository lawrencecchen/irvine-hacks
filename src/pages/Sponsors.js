import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Header from '../components/Header';
import EmailHyperlink from '../components/EmailHyperlink';
import ImageLink from '../components/ImageLink';
import HackClubBankLight from '../media/sponsors/HackClubBankLight.png';

const Sponsors = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Header>
      Sponsors
    </Header>
    <Container className="d-flex justify-content-center mb-4">
      <ImageLink href="https://hackclub.com/bank/" url={HackClubBankLight} />
    </Container>
    <Jumbotron className="bg-light rounded-0">
      <p style={{ fontSize: '1.3em' }}>
        Want to sponsor us? Check out our sponsorship prospectus and email us at <EmailHyperlink>sponsors@irvinehacks.com</EmailHyperlink>
      </p>
    </Jumbotron>
  </Container>
));

export default Sponsors;
