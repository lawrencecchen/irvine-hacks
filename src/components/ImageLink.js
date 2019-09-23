import React from 'react';

const ImageLink = (props) => {
  return (
    <a
      href={props.href}
    >
      <img
        src={props.url}
        style={
          {
            width: '340px',
          }
        }
        alt=""
      />
    </a>
  );
}

export default ImageLink;
