import React, { FC } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "./type";

const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...resetProps } = props;

  const classes = classNames("lucky-icon", className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...resetProps} />;
};

export default Icon;

// install
// npm i --save @fortawesome/fontawesome-svg-core
// npm install @fortawesome/free-solid-svg-icons
