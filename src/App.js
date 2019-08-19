import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation'
import FullScrollContent from './components/FullScrollContent';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Container fluid className="m-0 p-0">
        <Navigation />
        <Container className="p-0 m-0" id="outside" fluid>
          <FullScrollContent />
          {/* <Switch className="p-0 m-0">
            <Route path="/" exact component={FullScrollContent} />
            <Redirect to="/" />
          </Switch> */}
        </Container>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default App;
