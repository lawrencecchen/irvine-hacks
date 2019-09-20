import React from 'react';
import { FiMail } from 'react-icons/fi';

const EmailButton = (props) => {
  return (
    <a
      href={`mailto:${props.email}`}
      className="bg-btn text-light"
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
            transform: 'translateY(2.6px)'
          }} />
    </a>
  );
}

export default EmailButton;
