import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { ReactComponent as Logo } from "../media/logo.svg";

const End = (props) => {
  return (
    <Container className="h-100">
      <Jumbotron className="d-flex flex-column align-items-center justify-content-center">
        <Logo id="logo" width="250" height="250" />

        <h1 className="font-weight-bold text-center">
          Irvine Hacks went off with a blast!
        </h1>
        <Container className="mt-5 px-3 mx-0 h4">
          Thanks to all students around Orange County for coming. Irvine Hacks
          would not have been a success without your enthusiasm to learn and
          your passion for coding. Huge thanks to our helpful mentors, judges,
          teachers, as well as our generous{" "}
          <a
            href="#sponsors"
            onClick={() => props.handleSectionChange(props.sections.Sponsors)}
          >
            sponsors.
          </a>{" "}
        </Container>

        <Container
          className="d-flex flex-column align-items-center justify-content-center mt-5"
          fluid
        >
          <h3 className="font-weight-bold">Congratulations to our winners:</h3>
          <ul className="list-unstyled h5">
            <li>
              1.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devpost.com/software/pencilcase"
              >
                PencilCase
              </a>
            </li>
            <li>
              2.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devpost.com/software/coronavirus-io"
              >
                Coronavirus-io
              </a>
            </li>
            <li>
              3.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devpost.com/software/irvinehacks2020"
              >
                Carbon (E)Missions
              </a>
            </li>
            <li>
              Best education hack:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devpost.com/software/uam-calculator"
              >
                UAM Calculator
              </a>
            </li>
          </ul>
        </Container>
        <h2 className="font-weight-bold mt-5">
          We look forward to seeing you next year!
        </h2>
      </Jumbotron>
    </Container>
  );
};

export default End;
