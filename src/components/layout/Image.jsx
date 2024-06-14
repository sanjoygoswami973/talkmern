import React from "react";

const Image = ({ srcImg, altText, className, style, onClick }) => {
  return (
    <img
      src={srcImg}
      alt={altText}
      className={className}
      style={style}
      onClick={onClick}
    />
  );
};

export default Image;
