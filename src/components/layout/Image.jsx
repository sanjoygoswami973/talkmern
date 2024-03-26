import React from "react";

const Image = ({ srcImg, altText, className }) => {
  return <img src={srcImg} alt={altText} className={className} />;
};

export default Image;
