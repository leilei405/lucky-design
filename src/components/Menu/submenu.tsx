import React, { FC, useContext, useState, MouseEvent } from "react";
import classNames from "classnames";
import { ISubMenuProps, MenuContext, IMenuItemProps } from "./types";

const SubMenu: FC<ISubMenuProps> = (props) => {
  const { title, subActiveKey, className, children } = props;
  const { index, mode } = useContext(MenuContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // 定时器 为了让鼠标滑出下拉更加平滑
  let timer: any;

  const classes = classNames("menu-item submenu-item", className, {
    isActive: index === subActiveKey,
  });

  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const clickEvents = mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents = mode !== "vertical" && {
    onMouseEnter: (e: MouseEvent) => {
      handleMouse(e, true);
    },
    onMouseLeave: (e: MouseEvent) => {
      handleMouse(e, false);
    },
  };

  const renderChildren = () => {
    const subMenuClasses = classNames("lucky-submenu", {
      "menu-opened": menuOpen,
    });

    const childrenElement = React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return childElement;
      } else {
        console.warn("submenu only accept MenuItem as children");
        return null;
      }
    });

    return <ul className={subMenuClasses}>{childrenElement}</ul>;
  };

  return (
    <li key={subActiveKey} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
