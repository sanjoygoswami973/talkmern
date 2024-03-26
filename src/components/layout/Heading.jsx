import React from "react";
import Icon from "./Icon";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";

const Heading = (props) => {
  return props.as ? (
    props.align ? (
      <props.as className={props.className}>
        {props.align == "left" || props.align == "both" ? (
          <span>
            <Icon iconname={props.icon} />
          </span>
        ) : null}
        {props.text}
        {props.align == "right" || props.align == "both" ? (
          <span>
            <Icon iconname={props.icon2} />
          </span>
        ) : null}
      </props.as>
    ) : (
      <props.as className={props.className}>
        <span>
          <Icon iconname={props.icon} />
        </span>
        {props.text}
      </props.as>
    )
  ) : props.align ? (
    <h2 className={props.className}>
      {props.align == "left" || props.align == "both" ? (
        <span>
          <Icon iconname={props.icon} />
        </span>
      ) : null}
      {props.text}
      {props.align == "right" || props.align == "both" ? (
        <span>
          <Icon iconname={props.icon2} />
        </span>
      ) : null}
    </h2>
  ) : (
    <h2 className={props.className}>
      <span>
        <Icon iconname={props.icon} />
      </span>
      {props.text}
    </h2>
  );
};

export default Heading;
