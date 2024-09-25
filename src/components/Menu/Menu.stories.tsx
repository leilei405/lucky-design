import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./menu";
import MenuItem from "./menuitem";
import SubMenu from "./submenu";

const meta = {
  title: "Lucky-Design/Menu",
  component: Menu,
  parameters: {
    layout: "padded", // centered | fullscreen | padded
    backgrounds: {},
  },
  tags: ["!autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMenu: Story = () => {
  return (
    <Menu>
      <MenuItem>菜单一</MenuItem>
      <MenuItem>菜单二</MenuItem>
      <MenuItem>菜单三</MenuItem>
    </Menu>
  );
};

export const HorizontalMenu: Story = () => {
  return (
    <Menu mode="horizontal">
      <MenuItem>菜单一</MenuItem>
      <MenuItem>菜单二</MenuItem>
      <MenuItem>菜单三</MenuItem>
      <SubMenu title="菜单四">
        <MenuItem>4-1</MenuItem>
        <MenuItem>4-2</MenuItem>
        <MenuItem>4-3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export const VerticalMenu: Story = () => {
  return (
    <Menu mode="vertical" defaultOpenSubMenus={["3"]}>
      <MenuItem>菜单一</MenuItem>
      <MenuItem>菜单二</MenuItem>
      <MenuItem>菜单三</MenuItem>
      <SubMenu title="菜单四">
        <MenuItem>4-1</MenuItem>
        <MenuItem>4-2</MenuItem>
        <MenuItem>4-3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export const DarkMenu: Story = () => {
  return (
    <Menu theme="dark">
      <MenuItem>菜单一</MenuItem>
      <MenuItem>菜单二</MenuItem>
      <MenuItem>菜单三</MenuItem>
    </Menu>
  );
};

export const LightMenu: Story = () => {
  return (
    <Menu theme="light">
      <MenuItem>菜单一</MenuItem>
      <MenuItem>菜单二</MenuItem>
      <MenuItem>菜单三</MenuItem>
    </Menu>
  );
};

DefaultMenu.storyName = "默认菜单";
HorizontalMenu.storyName = "横向菜单";
VerticalMenu.storyName = "纵向菜单";
DarkMenu.storyName = "暗色菜单";
LightMenu.storyName = "亮色菜单";
