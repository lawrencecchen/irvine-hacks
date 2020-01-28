import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
import EmailHyperlink from "../components/EmailHyperlink";
import ImageLink from "../components/ImageLink";
import HackClubBankLight from "../media/sponsors/HackClubBankLight.png";
import Balsamiq from "../media/sponsors/balsamiq-logo-screen.svg";
import StickerMule from "../media/sponsors/sticker-mule-logo-white.svg";
import GitHub from "../media/sponsors/GitHub_Logo_White.png";
import AgalmacVentures from "../media/sponsors/agalmic_ventures.png";
import RedwoodAcademy from "../media/sponsors/redwood_code_academy.png";

const Sponsors = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Header>Sponsors</Header>
    <Container className="d-flex justify-content-center mb-4">
      <div class="row">
        <div class="col-md mt-3 text-center">
          <ImageLink
            href="https://hackclub.com/bank/"
            url={HackClubBankLight}
          />
        </div>
        <div class="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://balsamiq.com/" url={Balsamiq} />
        </div>
        <div class="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.stickermule.com/" url={StickerMule} />
        </div>
        <div class="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.github.com/" url={GitHub} />
        </div>
        <div class="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink
            href="https://www.agalmicventures.com/"
            url={AgalmacVentures}
          />
        </div>
        <div class="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink
            href="https://redwoodcodeacademy.com/"
            url={RedwoodAcademy}
          />
        </div>
      </div>
    </Container>
    <Jumbotron className="bg-light rounded-0">
      <p style={{ fontSize: "1.3em" }}>
        Want to sponsor us? Check out our sponsorship prospectus and email us at{" "}
        <EmailHyperlink>sponsors@irvinehacks.com</EmailHyperlink>
      </p>
    </Jumbotron>
  </Container>
));

export default Sponsors;
