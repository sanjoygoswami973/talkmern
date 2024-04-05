import React from "react";
import Icon from "./Icon";

const Paragraph = ({ align, text, icon, icon2, className, children }) => {
  return align ? (
    <p className={className}>
      {align == "left" || align == "both" ? (
        <span>
          <Icon iconname={icon} />
        </span>
      ) : null}
      {text}
      {children}
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
      {children}
    </p>
  );
};

export default Paragraph;
