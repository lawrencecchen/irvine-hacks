import React from 'react';
import { Card } from 'react-bootstrap';
import EmailButton from './EmailButton';

const Profile = (props) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-row align-items-center justify-content-between text-nowrap">
        <div>
          <div
            src={props.src}
            thumbnail
            className="inline flex-grow-1 rounded-circle border"
            style={
              {
                width: '100px',
                height: '100px',
                background: `url(${props.src})`,
                backgroundSize: 'contain',
              }
            }
          >
            <EmailButton email={props.email}></EmailButton>
          </div>
        </div>
        <Card.Text className="text-dark inline mx-3 flex-grow-1" style={{ fontSize: '1.4em' }}>
          {props.name}
          <Card.Subtitle className="mt-2 text-muted">{props.role}</Card.Subtitle>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Profile;
