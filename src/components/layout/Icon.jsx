import React from "react";

const Icon = ({ className, iconname, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      {iconname}
    </span>
  );
};

export default Icon;
