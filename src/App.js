import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation'
import About from './components/About';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import scrollToComponent from 'react-scroll-to-component';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: this.About
    }
    this.handleSectionChange = this.handleSectionChange.bind(this);
    this.defaultAnimationSettings = {
      align: 'top',
      ease: 'inOutCube',
      duration: 790,
      offset: -48
    };
    this.sections = {
      About: React.createRef(),
      FAQ: React.createRef(),
      Schedule: React.createRef(),
      Sponsors: React.createRef(),
      Contact: React.createRef(),
    }
  }

  handleSectionChange(section) {
    scrollToComponent(section.current, this.defaultAnimationSettings);
  }

  render() {
    return (
      <Container fluid className="m-0 p-0 overflow-x-hidden">
        <Navigation handleSectionChange={this.handleSectionChange} sections={this.sections} />
        <Container className="p-0 m-0 parallax" fluid>
          <Container fluid className="m-0 px-0 bg-transparent navbar-margin-top">
            <About ref={this.sections.About} />
            <FAQ ref={this.sections.FAQ} />
            <Schedule ref={this.sections.Schedule} />
            <Sponsors ref={this.sections.Sponsors} />
            <Contact ref={this.sections.Contact} />
          </Container>
          <Footer />
        </Container>
        {/* <Footer /> */}
      </Container >
    );
  }
}

export default App;
