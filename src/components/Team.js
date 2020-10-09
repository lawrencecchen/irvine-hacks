import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import WilliamHu from "../media/profile/William_Hu.jpg";
import AnshikaAgrawal from "../media/profile/AnshikaAgrawal.jpg";
import ZainaShaik from "../media/profile/ZainaShaik.jpg";
import LisaShi from "../media/profile/Lisa_Shi.jpeg";
import MichaelShi from "../media/profile/Michael_Shi.png";
import LawrenceChen from "../media/profile/Lawrence_Chen.jpg";
import ShivaniPrisricha from "../media/profile/ShivaniPasricha.jpg";
import Profile from "../components/Profile";
import Header from "../components/Header";
import "../components/Cards.scss";

const Team = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Header>Leadership</Header>
    <Jumbotron className="bg-transparent m-0 p-0 rounded-0 text-center" fluid>
      <Container id="responsive-cards">
        <Profile
          src={LawrenceChen}
          name="Lawrence Chen"
          email="lawrencechen2002@gmail.com"
        ></Profile>
        <Profile
          src={WilliamHu}
          name="William Hu"
          email="williamhu750@gmail.com"
        ></Profile>
        <Profile
          src={ShivaniPrisricha}
          name="Shivani Pasricha"
          email="pasricha.shivani@gmail.com"
        ></Profile>
        <Profile
          src={LisaShi}
          name="Lisa Shi"
          email="Lisa.Lshi@gmail.com"
        ></Profile>
        <Profile
          src={AnshikaAgrawal}
          name="Anshika Agrawal"
          email="anshi2002@gmaill.com"
        ></Profile>
        <Profile
          src={MichaelShi}
          name="Michael Shi"
          email="michshi8@gmail.com"
        ></Profile>
        <Profile
          src={ZainaShaik}
          name="Zaina Shaik"
          email="zainashaik02@gmail.com"
        ></Profile>
      </Container>
    </Jumbotron>
  </Container>
));

export default Team;
