import React from 'react';

const EmailHyperlink = (props) => {
  return (
    <a
      href={`mailto:${props.email ? props.email : props.children}`}
      target={props.target ? props.target : "_blank"}
      rel="noopener noreferrer"
      className="text-btn"
    >
      {props.children ? props.children : "Email"}
    </a>
  );
}

export default EmailHyperlink;
