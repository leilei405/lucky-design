import React, { FC } from "react";
import classNames from "classnames";
import { IMenuItemProps } from "./types";

const MenuItem: FC<IMenuItemProps> = (props) => {
  const { key, className, style, disabled, children } = props || {};

  const classes = classNames("menu-item", className, {
    disabled: disabled,
  });

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
