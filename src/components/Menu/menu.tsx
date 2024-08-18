import React, { FC, useState } from "react";
import classNames from "classnames";
import { IMenuProps, IMenuContext, MenuContext } from "./types";

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

  // 默认选中第一个
  const [currentActive, setCurrentActive] = useState(defaultIndex);

  const classes = classNames("lucky-menu", className, {
    [`lucky-menu-${mode}`]: mode === "vertical",
    [`lucky-menu-${theme}`]: theme === "dark",
  });

  const handleClick = (idx: string | number) => {
    setCurrentActive(idx);
    if (typeof onSelect === "function") {
      onSelect(idx);
    }
  };

  // 需要传递给子组件的context
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };

  return (
    <ul
      className={classes}
      style={style}
      data-testid="test-menu"
      {...restProps}
    >
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
