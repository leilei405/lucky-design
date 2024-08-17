import React, { CSSProperties, ReactNode } from "react";

/** 菜单模式 vertical | horizontal */
type MenuMode = "vertical" | "horizontal";
/** 菜单主题 light | dark */
type MenuTheme = "light" | "dark";

// Menu
export interface IMenuProps {
  mode?: MenuMode;
  theme?: MenuTheme;
  className?: string;
  style?: CSSProperties;
  defaultIndex?: string;
  defaultActive?: string;
  children?: ReactNode;
  onSelect?: (key: string | number) => void;
}

// Menu.Item
export interface IMenuItemProps {
  key?: string | number;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children: ReactNode;
}
