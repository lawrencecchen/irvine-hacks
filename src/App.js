import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation'
import FullScrollContent from './components/FullScrollContent';
import About from './components/About';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import scrollToComponent from 'react-scroll-to-component';
import './App.scss';
// import $ from 'jquery';

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
      duration: 790
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
      <Container fluid className="m-0 p-0" style={{ overflowX: 'hidden' }}>
        <Navigation handleSectionChange={this.handleSectionChange} sections={this.sections} />
        <Container className="p-0 m-0" id="fullScrollContent" fluid>
          <Container fluid className="m-0 p-0 bg-primary">
            <About ref={this.sections.About} />
            <FAQ ref={this.sections.FAQ} />
            <Schedule ref={this.sections.Schedule} />
            <Sponsors ref={this.sections.Sponsors} />
            <Contact ref={this.sections.Contact} />
            <Footer />
          </Container>
          {/* <Switch className="p-0 m-0">
            <Route path="/" exact component={FullScrollContent} />
            <Redirect to="/" />
          </Switch> */}
        </Container>
        {/* <Footer /> */}
      </Container >
    );
  }
}

export default App;
