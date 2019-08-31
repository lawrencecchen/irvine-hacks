import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { ReactComponent as Logo } from '../media/logo.svg';
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      yFromTop: 0,
    }
  }

  handleClick(section) {
    this.props.handleSectionChange(section);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let yFromTop = window.pageYOffset;
    this.setState({ yFromTop });
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className={`py-0 ${this.state.yFromTop <= 53 ? 'nav' : 'navbar-darken'}`}
      >
        <Navbar.Brand>
          <Logo id="logo" />
          <Nav.Link
            id="title"
            href="#about"
            onClick={() => this.handleClick(this.props.sections.About)}
            className="text-light"
            as="span"
            role="button"
            style={{ cursor: 'pointer' }}
          >
            Irvine Hacks
          </Nav.Link>
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
              {/* <a href=""> */}
              <Button className="m-0 btn-lg btn-outline-light bg-secondary text-light" disabled>Sponsor Us</Button>
              {/* </a> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
