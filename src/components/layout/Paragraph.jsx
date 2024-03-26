import React from "react";
import Icon from "./Icon";

const Paragraph = ({ align, text, icon, icon2, className }) => {
  return align ? (
    <p className={className}>
      {align == "left" || align == "both" ? (
        <span>
          <Icon iconname={icon} />
        </span>
      ) : null}
      {text}
      {align == "right" || align == "both" ? (
        <span>
          <Icon iconname={icon2} />
        </span>
      ) : null}
    </p>
  ) : (
    <p className={className}>
      <span>
        <Icon iconname={icon} />
      </span>
      {text}
    </p>
  );
};

export default Paragraph;
