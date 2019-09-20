import React from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { TiMail } from 'react-icons/ti';
import EmailHyperlink from '../components/EmailHyperlink';

const Footer = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0 mt-4 mb-2" ref={ref}>
    <Jumbotron className="m-0 bg-nav-dark text-light rounded-0 d-flex flex-column align-items-center">
      <Row style={{ fontSize: '2em', lineHeight: '.86' }}>
        CONTACT US
      </Row>
      <Row className="mt-2 mb-3 d-flex align-items-center">
        {/* <TiSocialFacebookCircular style={{ width: '45px', height: '45px' }} /> */}
        <EmailHyperlink email="team@irvinehacks.com">
          <TiMail style={{ width: '45px', height: '45px', lineHeight: '.9' }} />
        </EmailHyperlink>
      </Row>
      <Row className="m-3 font-weight-bold" style={{ fontSize: '1.2em', lineHeight: '.9' }}>
        Site by&nbsp;<EmailHyperlink email="lawrencechen2002@gmail.com">
          <span className="text-light">
            Lawrence Chen
          </span>
        </EmailHyperlink>
      </Row>
      <Row className="m-2 text-center bg-light text-muted p-1 rounded">
        Fiscally sponsored by The Hack Foundation.<br />
        Nonprofit EIN: 81-2908499.
      </Row>
    </Jumbotron>
  </Container>
));

export default Footer;
