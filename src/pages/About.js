import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import "../components/Section.scss";
// import RegisterButton from '../components/RegisterButton';
// import Background from '../media/undraw_web_development_w2vv.svg';

const About = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Container fluid className="p-0">
      <Jumbotron
        className="bg-transparent m-0 rounded-0 text-light"
        id="about-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        fluid
      >
        <h1 className="text-center">Irvine Hacks</h1>
        <p className="text-light subtitle text-center">
          a <strong>12-hour</strong> High School Hackathon, hosted by Irvine
          students.
        </p>
        <p className="text-light subtitle font-weight-bold">2020 February 29</p>
        <p className="text-light subtitle">
          Venue:{" "}
          <a
            href="https://goo.gl/maps/nLGnQ5ZnxntTUZM4A"
            className="text-emphasis font-weight-bold"
          >
            2850 Red Hill Ave #130, Santa Ana, CA 92705
          </a>
        </p>
        <Button
          className="my-0 mr-1 btn-lg d-flex align-items-center justify-content-center"
          variant="btn"
          style={{ width: "240px", height: "70px", fontSize: "2em" }}
          href="https://airtable.com/shreV73Hi2wPaizAB"
          target="_blank"
        >
          Register Now
        </Button>
      </Jumbotron>
    </Container>
    <Container fluid className="bg-light">
      <Jumbotron className="bg-transparent mb-0" id="mission-statement">
        Irvine Hacks is a <strong className="text-emphasis">12-hour</strong>{" "}
        student-organized hackathon in which over a hundred students will be
        able to build transformative projects, one line of code at a time.
        Whether participants decide to tackle some of the world’s most pressing{" "}
        <strong className="text-emphasis">
          social and environmental issues
        </strong>{" "}
        or create an interesting game to captivate players, Irvine Hacks will
        provide support every step of the way. Everything from food to prizes
        will be provided free thanks to our many sponsors!
      </Jumbotron>
    </Container>
    <Container fluid className="mt-5 text-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.2047444833033!2d-117.84878798470552!3d33.70365058070224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdeb082185a59%3A0x81d33be601babaff!2s2850%20Red%20Hill%20Ave%20%23130%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1579909407456!5m2!1sen!2sus"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        className="border-0 mx-auto"
      ></iframe>
    </Container>
  </Container>
));

export default About;
