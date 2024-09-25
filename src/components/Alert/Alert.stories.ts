import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./alert";

const meta = {
  title: "Lucky-Design/Alert",
  component: Alert,
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["!autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {},
  args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
    title: "Default",
    description: "desc",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "Success",
    description: "desc",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning",
    description: "desc",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    title: "Danger",
    description: "desc",
  },
};
