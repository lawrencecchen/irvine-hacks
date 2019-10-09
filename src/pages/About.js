import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import '../components/Section.scss';
// import RegisterButton from '../components/RegisterButton';
// import Background from '../media/undraw_web_development_w2vv.svg';

const About = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Container fluid className="p-0">
      <Jumbotron
        className="bg-transparent m-0 rounded-0 text-light"
        id="about-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        fluid
      >
        <h1 className="text-center">Irvine Hacks</h1>
        <p className="text-light subtitle text-center">
          a 12-hour High School Hackathon, hosted by Irvine students.
        </p>
        <p className="text-light subtitle">
          2019 November 16 - 17
            </p>
        <p className="text-light subtitle">
          Venue TBD
        </p>
        <Button
          className="my-0 mr-1 btn-lg d-flex align-items-center justify-content-center"
          variant="btn"
          style={{ width: '240px', height: '70px', fontSize: '2em' }}
          href="https://airtable.com/shreV73Hi2wPaizAB"
          target="_blank"
        >
          Register Now
        </Button>
      </Jumbotron>
    </Container>
    <Container fluid className="bg-light">
      <Jumbotron className="bg-transparent mb-0" id="mission-statement">
        Irvine Hacks is a <strong className="text-emphasis">12-hour</strong> student-organized hackathon in which over a hundred students will be able to build transformative projects, one line of code at a time. Whether participants decide to tackle some of the world’s most pressing <strong className="text-emphasis">social and environmental issues</strong> or create an interesting game to captivate players, Irvine Hacks will provide support every step of the way. Everything from food to prizes will be provided free thanks to our many sponsors!
      </Jumbotron>
    </Container>
  </Container>
));

export default About;
