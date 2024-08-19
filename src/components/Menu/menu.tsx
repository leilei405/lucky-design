import React, { FC, useState } from "react";
import classNames from "classnames";
import { IMenuProps, IMenuContext, MenuContext, IMenuItemProps } from "./types";

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

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          activeKey: index,
        });
      } else {
        console.warn(
          "Warning: [LuckyMenu] Menu can only contain `MenuItem` and `SubMenu` as children."
        );
        return null;
      }
    });
  };

  return (
    <ul
      className={classes}
      style={style}
      data-testid="test-menu"
      {...restProps}
    >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
