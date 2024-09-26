import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { JSX } from "react/jsx-runtime";

import Button from "./button";
import { ButtonProps } from "./types";

const meta = {
  title: "Lucky-Design/Button",
  component: Button,
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = ButtonProps;

export const Default: Story = {
  args: { type: "default", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="default">
      Default
    </Button>
  ),
  storyName: "默认按钮",
};

export const Primary: Story = {
  args: { type: "primary", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="primary">
      Primary
    </Button>
  ),
  storyName: "主要按钮",
};

export const Success: Story = {
  args: { type: "success", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="success">
      Success
    </Button>
  ),
  storyName: "成功按钮",
};

export const Danger: Story = {
  args: { type: "danger", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="danger">
      Danger
    </Button>
  ),
  storyName: "危险按钮",
};

export const Link: Story = {
  args: { type: "link", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="link">
      Link
    </Button>
  ),
  storyName: "链接按钮",
};

export const Secondary: Story = {
  args: { type: "secondary", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="secondary">
      Secondary
    </Button>
  ),
  storyName: "次要按钮",
};

export const Info: Story = {
  args: { type: "info", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="info">
      Info
    </Button>
  ),
  storyName: "信息按钮",
};

export const Warning: Story = {
  args: { type: "warning", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="warning">
      Warning
    </Button>
  ),
  storyName: "警告按钮",
};

export const Light: Story = {
  args: { type: "light", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="light">
      Light
    </Button>
  ),
};

export const Dark: Story = {
  args: { type: "dark", disabled: false, size: "small" },
  render: (args: ArgsProps) => (
    <Button {...args} type="dark">
      Dark
    </Button>
  ),
  storyName: "深色按钮",
};

// Default.storyName = "默认按钮";
// Primary.storyName = "主要按钮";
// Success.storyName = "成功按钮";
// Danger.storyName = "危险按钮";
// Link.storyName = "跳转按钮";
// Secondary.storyName = "次要按钮";
// Info.storyName = "信息按钮";
// Warning.storyName = "告警按钮";
// Light.storyName = "亮色按钮";
// Dark.storyName = "暗色按钮";
