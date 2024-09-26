import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./button";
import { ButtonProps } from "./types";

const meta = {
  title: "Lucky-Design/Button",
  component: Button,
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {
    type: {
      options: [
        "default",
        "primary",
        "link",
        "danger",
        "info",
        "light",
        "dark",
        "warning",
        "secondary",
      ],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "large"],
      control: {
        type: "radio",
      },
    },
  },
  args: {
    type: "default",
    size: "small",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "default" },
  render: (args: ButtonProps) => <Button {...args}>Default</Button>,
};

export const Primary: Story = {
  args: { type: "primary" },
  render: (args: ButtonProps) => <Button {...args}>Primary</Button>,
};

export const Success: Story = {
  args: { type: "success" },
  render: (args: ButtonProps) => <Button {...args}>Success</Button>,
};

export const Danger: Story = {
  args: { type: "danger" },
  render: (args: ButtonProps) => <Button {...args}>Danger</Button>,
};

export const Link: Story = {
  args: { type: "link", href: "https://www.baidu.com/" },
  render: (args: ButtonProps) => <Button {...args}>Link</Button>,
};

export const Secondary: Story = {
  args: { type: "secondary" },

  render: (args: ButtonProps) => <Button {...args}>Secondary</Button>,
};

export const Info: Story = {
  args: { type: "info" },
  render: (args: ButtonProps) => <Button {...args}>Info</Button>,
};

export const Warning: Story = {
  args: { type: "warning" },
  render: (args: ButtonProps) => <Button {...args}>Warning</Button>,
};

export const Light: Story = {
  args: { type: "light" },
  render: (args: ButtonProps) => <Button {...args}>Light</Button>,
};

export const Dark: Story = {
  args: { type: "dark" },
  render: (args: ButtonProps) => <Button {...args}>Dark</Button>,
};

Default.storyName = "默认按钮";
Primary.storyName = "主要按钮";
Success.storyName = "成功按钮";
Danger.storyName = "危险按钮";
Link.storyName = "跳转按钮";
Secondary.storyName = "次要按钮";
Info.storyName = "信息按钮";
Warning.storyName = "告警按钮";
Light.storyName = "亮色按钮";
Dark.storyName = "暗色按钮";
