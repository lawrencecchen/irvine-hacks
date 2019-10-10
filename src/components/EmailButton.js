import React from 'react';
import { FiMail } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';

const EmailButton = (props) => {
  return (
    <Button
      as="a"
      href={`mailto:${props.email}`}
      className="bg-btn text-light border-0"
      style={
        {
          width: '30px',
          height: '30px',
          position: 'absolute',
          borderRadius: '50%',
          transform: 'translate(26px, 69.5px)',
          borderWidth: '10px'
        }
      }
      rel="noopener noreferrer"
      target="_blank"
    >
      <FiMail
        style={
          {
            width: '20px',
            height: '20px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
    </Button>
  );
}

export default EmailButton;
