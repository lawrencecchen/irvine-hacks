import React from "react";

const ImageLink = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto"
    >
      <img
        src={props.url}
        style={{
          maxWidth: "300px",
          maxHeight: "200px",
        }}
        alt=""
      />
    </a>
  );
};

export default ImageLink;
