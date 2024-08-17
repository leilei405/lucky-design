import React, { FC, useContext } from "react";
import classNames from "classnames";
import { IMenuItemProps, MenuContext } from "./types";

const MenuItem: FC<IMenuItemProps> = (props) => {
  const { index, onSelect } = useContext(MenuContext);

  const { activeKey, className, style, disabled, children } = props || {};

  const classes = classNames("menu-item", className, {
    isDisabled: disabled,
    isActive: index === activeKey,
  });

  const handleClick = () => {
    if (onSelect && !disabled) {
      onSelect(activeKey);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
