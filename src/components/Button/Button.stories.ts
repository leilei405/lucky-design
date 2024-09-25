import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./button";

const meta = {
  title: "Lucky-Design/Button",
  component: Button,
  parameters: {
    layout: "centered", // centered | fullscreen | padded
  },
  tags: ["!autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {
    children: {
      label: "111",
      description: "423412",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    children: "Danger",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    children: "Link",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Secondary",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    children: "Info",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "Warning",
  },
};

export const Light: Story = {
  args: {
    type: "light",
    children: "Light",
  },
};

export const Dark: Story = {
  args: {
    type: "dark",
    children: "Dark",
  },
};
