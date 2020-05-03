import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../media/logo.svg";
import RegisterButton from "../components/RegisterButton";
import "../components/Navigation.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.setIsNavExpanded = this.setIsNavExpanded.bind(this);

    this.state = {
      yFromTop: 0,
    };
  }

  handleClick(section) {
    this.props.handleSectionChange(section);
  }

  handleNavClick(e) {
    if (this.node.contains(e.target)) {
      // if clicked inside menu do something
    } else {
      // If clicked outside menu, close the navbar.
      this.setState({ isNavExpanded: false });
    }
  }

  setIsNavExpanded = (isNavExpanded) => {
    this.setState({ isNavExpanded: isNavExpanded });
  };

  handleScroll() {
    let yFromTop = window.pageYOffset;
    this.setState({ yFromTop });
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleNavClick, false);
  }

  render() {
    return (
      <Container fluid ref={(node) => (this.node = node)} id="navigation">
        <Navbar
          onToggle={this.setIsNavExpanded}
          expanded={this.state.isNavExpanded}
          collapseOnSelect
          expand="lg"
          variant="dark"
          fixed="top"
          className={`py-0 ${
            this.state.yFromTop <= 53 ? "nav" : "navbar-darken"
          }`}
          fluid
        >
          <Navbar.Brand>
            <Logo id="logo" />
            <Nav.Link
              id="nav-title"
              href="#about"
              onClick={() => this.handleClick(this.props.sections.About)}
              className="text-light"
              as="span"
              role="button"
              style={{ cursor: "pointer" }}
            >
              Irvine Hacks
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" fluid />
          <Navbar.Collapse id="responsive-navbar-nav" fluid>
            <Nav className="ml-auto">
              <Nav.Link
                href="#about"
                onClick={() => this.handleClick(this.props.sections.About)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#faq"
                onClick={() => this.handleClick(this.props.sections.FAQ)}
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                href="#schedule"
                onClick={() => this.handleClick(this.props.sections.Schedule)}
              >
                Schedule
              </Nav.Link>
              <Nav.Link
                href="#sponsors"
                onClick={() => this.handleClick(this.props.sections.Sponsors)}
              >
                Sponsors
              </Nav.Link>
              <Nav.Link
                href="#team"
                onClick={() => this.handleClick(this.props.sections.Team)}
              >
                Meet the Team
              </Nav.Link>
              {/* <Nav.Link href="#prospectus" onClick={() => this.handleClick(this.props.sections.FAQ)}>Prospectus</Nav.Link> */}
              <Nav.Link
                href="#contact"
                onClick={() => this.handleClick(this.props.sections.Contact)}
              >
                Contact
              </Nav.Link>
              <Nav.Link as="span">
                <Button
                  className="my-0 mr-1 btn-lg d-flex align-items-center justify-content-center"
                  variant="btn"
                  href="https://airtable.com/shreV73Hi2wPaizAB"
                  target="_blank"
                  disabled
                >
                  Register Now
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  className="m-0 btn-lg btn-outline-light bg-secondary text-light"
                  onClick={() => this.handleClick(this.props.sections.Sponsors)}
                >
                  Sponsor Us
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default Navigation;
