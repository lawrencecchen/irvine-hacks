import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import WilliamHu from '../media/profile/William_Hu.jpg';
import AnshikaAgrawal from '../media/profile/AnshikaAgrawal.jpg';
import ZainaShaik from '../media/profile/ZainaShaik.jpg';
import LisaShi from '../media/profile/Lisa_Shi.jpeg';
import RajKumar from '../media/profile/Raj_Kumar.jpg';
import MichaelShi from '../media/profile/Michael_Shi.png';
import LawrenceChen from '../media/profile/Lawrence_Chen.jpg';
import ShivaniPrisricha from '../media/profile/ShivaniPasricha.jpg';
import Unknown from '../media/profile/Unknown.jpg';
import Profile from '../components/Profile';
import Header from '../components/Header';
import '../components/Cards.scss';

const Team = React.forwardRef((props, ref) => (
  <Container fluid className="p-0 m-0" ref={ref}>
    <Header>
      Advisors
    </Header>
    <Jumbotron className="bg-transparent m-0 p-0 rounded-0 text-center" fluid>
      <Container id="responsive-cards">
        <Profile src={Unknown} name="Evan Nishi" role="Mentor"></Profile>
      </Container>
    </Jumbotron>
    <Header>
      Leadership
    </Header>
    <Jumbotron className="bg-transparent m-0 p-0 rounded-0 text-center" fluid>
      <Container id="responsive-cards">
        <Profile src={WilliamHu} name="William Hu" role="Lead Organizer" email="williamhu750@gmail.com"></Profile>
        <Profile src={ShivaniPrisricha} name="Shivani Pasricha" role="Lead Organizer" email="pasricha.shivani@gmail.com"></Profile>
        <Profile src={LawrenceChen} name="Lawrence Chen" role="Tech" email="lawrencechen2002@gmail.com"></Profile>
        <Profile src={LisaShi} name="Lisa Shi" role="Tech" email="Lisa.Lshi@gmail.com"></Profile>
        <Profile src={AnshikaAgrawal} name="Anshika Agrawal" role="Finance" email="anshi2002@gmaill.com"></Profile>
        <Profile src={RajKumar} name="Raj Kumar" role="Finance"></Profile>
        <Profile src={MichaelShi} name="Michael Shi" role="Marketing" email="michshi8@gmail.com"></Profile>
        <Profile src={ZainaShaik} name="Zaina Shaik" role="Marketing" email="zainashaik02@gmail.com"></Profile>
      </Container>
    </Jumbotron>
  </Container>
));

export default Team;
