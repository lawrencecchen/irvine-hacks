import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as Logo } from '../media/embrace-the-curve.svg';
import scrollToComponent from 'react-scroll-to-component';
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(section) {
    this.props.handleSectionChange(section);
  }

  render() {
    console.log(this.props.sections)
    return (
      <Container fluid className="mt-0 p-0" >
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
          <Navbar.Brand>
            Irvine Hacks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about" onClick={() => this.handleClick(this.props.sections.About)}>About Us</Nav.Link>
              <Nav.Link href="#faq" onClick={() => this.handleClick(this.props.sections.FAQ)}>FAQ</Nav.Link>
              <Nav.Link href="#schedule" onClick={() => this.handleClick(this.props.sections.Schedule)}>Schedule</Nav.Link>
              <Nav.Link href="#sponsors" onClick={() => this.handleClick(this.props.sections.Sponsors)}>Sponsors</Nav.Link>
              {/* <Nav.Link href="#prospectus" onClick={() => this.handleClick(this.props.sections.FAQ)}>Prospectus</Nav.Link> */}
              <Nav.Link href="#contact" onClick={() => this.handleClick(this.props.sections.Contact)}>Contact</Nav.Link>
              <Nav.Link>
                <Button className="my-0 mr-1 btn-lg" variant="btn" id="eventbrite-widget-modal-trigger-69687181235">Register Now</Button>
              </Nav.Link>
              <Nav.Link>
                <a href={'https://www.google.com'} target="_blank">
                  <Button className="m-0 btn-lg btn-outline-btn">Sponsor Us</Button>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container >
    );
  }
}
export default Navigation;
