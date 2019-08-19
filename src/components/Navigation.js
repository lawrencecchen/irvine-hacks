import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as Logo } from '../media/embrace-the-curve.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <Container fluid className="mt-0 p-0">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
        <Navbar.Brand>
          Irvine Hacks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            <Nav.Link href="#prospectus">Prospectus</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link>
              <Button className="my-0 mr-1 btn-lg" variant="btn" id="eventbrite-widget-modal-trigger-69687181235">Register Now</Button>
            </Nav.Link>
            <Nav.Link>
              <a href={'https://www.google.com'}>
                <Button className="m-0 btn-lg btn-outline-btn">Sponsor Us</Button>
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
