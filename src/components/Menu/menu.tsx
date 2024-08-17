import React, { FC } from "react";
import classNames from "classnames";
import { IMenuProps } from "./types";

const Menu: FC<IMenuProps> = (props) => {
  const {
    mode = "horizontal",
    theme,
    style,
    children,
    onSelect,
    className,
    defaultActive,
    defaultIndex = 0,
    ...restProps
  } = props || {};

  const classes = classNames("lucky-menu", className, {
    [`lucky-menu-${mode}`]: mode === "vertical",
    [`lucky-menu-${theme}`]: theme === "dark",
  });

  return (
    <ul className={classes} style={style} {...restProps}>
      {children}
    </ul>
  );
};

export default Menu;
