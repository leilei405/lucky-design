import React, { FC, useContext } from "react";
import classNames from "classnames";
import { ISubMenuProps, MenuContext, IMenuItemProps } from "./types";

const SubMenu: FC<ISubMenuProps> = (props) => {
  const { title, subActiveKey, className, children, style } = props;
  const { index } = useContext(MenuContext);

  const classes = classNames("menu-item submenu-item", className, {
    isActive: index === subActiveKey,
  });

  const renderChildren = () => {
    const childrenElement = React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return childElement;
      } else {
        console.warn("submenu only accept MenuItem as children");
      }
    });
    return <ul className="lucky-submenus">{childrenElement}</ul>;
  };
  return (
    <li key={subActiveKey} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
