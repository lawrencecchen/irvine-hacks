import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Jumbotron className="m-0 rounded-0 text-light bg-transparent">
      <h1 className="display-3 text-center">{props.children}</h1>
    </Jumbotron>
  );
}

export default Header;
