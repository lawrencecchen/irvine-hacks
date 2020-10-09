import React from "react";
import { Container, Card } from "react-bootstrap";
import "../components/Cards.scss";
import Header from "../components/Header";
import Banner from "../media/IrvineHacksTransparentLogo.png";

const FAQ = React.forwardRef((props, ref) => (
  <Container fluid className="px-0 mx-0 bg-transparent" ref={ref}>
    <div
      style={{
        background: `url(${Banner})`,
        filter: "blur(8px) brightness(85%)",
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        zIndex: -1,
        transform: "translateY(-100px)"
      }}
    ></div>
    <Header>FAQ</Header>
    <Container id="responsive-cards" className="my-0 mx-auto py-0 px-1">
      <Card>
        <Card.Body>
          <Card.Title>What is a Hackathon?</Card.Title>
          <Card.Text>
            Irvine Hacks gathers high school students together for 12 hours to
            collaborate and “hack”! Participants design, execute, and present a
            project based around a theme, winning cool prizes and having fun in
            the process!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Hacking? Is that legal?</Card.Title>
          <Card.Text>
            Hackathons do not necessarily deal with breaching computer systems
            and exploiting vulnerabilities. Instead, the word is being redefined
            into creating unique and innovative projects within a time period.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        as="a"
        href="https://www.wsj.com/articles/teen-hackers-try-to-convince-parents-they-are-up-to-good-11569922200"
        target="_blank"
        className="p-0 border-5"
      >
        <Card.Body
          style={{
            backgroundImage: "url(https://images.wsj.net/im-112234/IM)",
            backgroundSize: "cover",
            filter: "blur(20)",
            borderRadius: "3px"
          }}
        >
          <Card.Title style={{ zIndex: 1 }} className="text-light">
            Check out Wall Street Journal's article about "hacking"!
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>How much does it cost?</Card.Title>
          <Card.Text>
            $0 - Registration and attendance are totally free! Meals, snacks,
            food, drinks, and workshops included.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>When and Where?</Card.Title>
          <Card.Text>
            February 29th, 2020 @{" "}
            <a
              href="https://goo.gl/maps/nLGnQ5ZnxntTUZM4A"
              className="text-emphasis font-weight-bold"
            >
              2850 Red Hill Ave #130, Santa Ana, CA 92705.
            </a>{" "}
            Hope to see you there!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Who can Attend?</Card.Title>
          <Card.Text>
            Any student currently between grades 9 and 12 can participate!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>What if I can't code?</Card.Title>
          <Card.Text>
            Absolutely no programming experience is necessary! Workshops will be
            open throughout the day to teach basic coding skills, though!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>How can I become a sponsor?</Card.Title>
          <Card.Text>
            Check out our sponsorship prospectus, and contact us at{" "}
            <a href="mailto:sponsors@irvinehacks.com">
              sponsors@irvinehacks.com
            </a>
            .
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </Container>
));

export default FAQ;
