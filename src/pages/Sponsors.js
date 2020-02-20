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
import idtech from "../media/sponsors/IDTech.png";
import Wolfram from "../media/sponsors/wolfram-language-text-logo-copy-1.png";
import Sashido from "../media/sponsors/sashido-logo-for sites.png";
import Voiceflow from "../media/sponsors/voiceflow.png";
import Desmos from "../media/sponsors/desmos.png";
import Sabio from "../media/sponsors/sabio.png";
import AlphaRed from "../media/sponsors/AlphaRedSolutions.jpg";
import ChallengeRocket from "../media/sponsors/challengerocket_logo.png";
import Ultrapress from "../media/sponsors/Ultrapress.png";
import CodeNinjas from "../media/sponsors/CodeNinjas.png";
import LeanGap from "../media/sponsors/Leangap.png";
import Bugsee from "../media/sponsors/Bugsee.png";

const Sponsors = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Header>Sponsors</Header>
    <Container className="mb-4 text-center">
      <div className="row text-center">
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink
            href="https://hackclub.com/bank/"
            url={HackClubBankLight}
          />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://sabio.la/" url={Sabio} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink
            href="https://redwoodcodeacademy.com/"
            url={RedwoodAcademy}
          />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.github.com/" url={GitHub} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <div className="mx-auto p-3 rounded">
            <ImageLink href="http://www.alphareds.com/" url={AlphaRed} />
          </div>
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://balsamiq.com/" url={Balsamiq} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.idtech.com/" url={idtech} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink
            href="https://www.agalmicventures.com/"
            url={AgalmacVentures}
          />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.ultrapress.com/" url={Ultrapress} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.codeninjas.com/" url={CodeNinjas} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.stickermule.com/" url={StickerMule} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://leangap.org/" url={LeanGap} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <div className="mx-auto p-3 rounded">
            <ImageLink href="https://www.desmos.com/" url={Desmos} />
          </div>
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <div className="mx-auto p-3 rounded">
            <ImageLink
              href="https://challengerocket.com/?utm_source=www&utm_medium=link&utm_campaign=partnership_logo&utm_term=kar&utm_content=irvinehacks"
              url={ChallengeRocket}
            />
          </div>
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <div className="mx-auto p-3 rounded">
            <ImageLink href="https://bugsee.com" url={Bugsee} />
          </div>
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <div className="mx-auto p-3 rounded">
            <ImageLink href="https://www.sashido.io/en/" url={Sashido} />
          </div>
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <ImageLink href="https://www.wolframalpha.com/" url={Wolfram} />
        </div>
        <div className="col-md mt-3 text-center rounded d-flex align-self-center">
          <div className="mx-auto p-3 rounded">
            <ImageLink href="https://www.voiceflow.com/" url={Voiceflow} />
          </div>
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
