import React from "react";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import "../components/Section.scss";
// import RegisterButton from '../components/RegisterButton';
// import Background from '../media/undraw_web_development_w2vv.svg';

const About = React.forwardRef((props, ref) => {
  return (
    <Container fluid className="p-0 m-0" ref={ref}>
      <Container fluid className="p-0">
        <Jumbotron
          className="bg-transparent m-0 rounded-0 text-light"
          id="about-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          fluid
        >
          <h1 className="text-center">Irvine Hacks</h1>
          <p className="text-light subtitle text-center">
            a <strong>12-hour</strong> High School Hackathon, hosted by Irvine
            students.
          </p>
          <p className="text-light subtitle font-weight-bold">
            2020 February 29 (Concluded)
          </p>
          <p className="text-light subtitle text-center">
            Venue:{" "}
            <a
              href="https://goo.gl/maps/nLGnQ5ZnxntTUZM4A"
              className="text-emphasis font-weight-bold"
            >
              2850 Red Hill Ave #130, Santa Ana, CA 92705
            </a>
          </p>
          <Row className="d-flex">
            <Col>
              <Button
                className="mx-auto mb-3 btn-lg d-flex align-items-center justify-content-center"
                variant="btn"
                style={{ width: "240px", height: "70px", fontSize: "2em" }}
                href="https://airtable.com/shreV73Hi2wPaizAB"
                target="_blank"
                disabled
              >
                Register Now
              </Button>
            </Col>
            <Col>
              <Button
                className="mx-auto btn-lg d-flex align-items-center justify-content-center bg-nav-dark border-none"
                variant="btn"
                style={{ width: "240px", height: "70px", fontSize: "2em" }}
                href="http://bit.ly/IrvineHacksVolunteer"
                target="_blank"
                disabled
              >
                Volunteer
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      <Container fluid className="bg-light">
        <Jumbotron className="bg-transparent mb-0" id="mission-statement">
          Irvine Hacks is a <strong className="text-emphasis">12-hour</strong>{" "}
          student-organized hackathon in which high school students will be able
          to build transformative projects, one line of code at a time. Whether
          participants decide to tackle some of the world’s most pressing{" "}
          <strong className="text-emphasis">
            social and environmental issues
          </strong>{" "}
          or create an interesting game to captivate players, Irvine Hacks will
          provide support every step of the way. Everything from food to prizes
          will be provided free thanks to our many sponsors!
        </Jumbotron>
      </Container>
      <Container className="mt-5 text-center embed-responsive embed-responsive-16by9 p-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.2047444833033!2d-117.84878798470552!3d33.70365058070224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdeb082185a59%3A0x81d33be601babaff!2s2850%20Red%20Hill%20Ave%20%23130%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1579909407456!5m2!1sen!2sus"
          frameborder="0"
          allowfullscreen=""
          className="border-0 embed-responsive-item"
          title="map"
        ></iframe>
      </Container>
    </Container>
  );
});

export default About;
