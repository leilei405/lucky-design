import type { Meta, StoryObj } from "@storybook/react";
import { JSX } from "react/jsx-runtime";
import Alert from "./alert";
import { AlertProps } from "./types";
import { fn } from "@storybook/test";

const meta = {
  title: "Lucky-Design/Alert",
  component: Alert,
  parameters: {
    layout: "padded", // centered | fullscreen | padded
  },
  tags: ["autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {},
  args: { onClose: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = JSX.IntrinsicAttributes & AlertProps;

export const Default: Story = {
  args: { type: "default", title: "Default", description: "desc" },
  storyName: "默认提示",
  render: (args: ArgsProps) => <Alert {...args} />,
};

export const Success: Story = {
  args: { type: "success", title: "Success", description: "desc" },
  storyName: "成功提示",
  render: (args: ArgsProps) => <Alert {...args} />,
};

export const Warning: Story = {
  args: { type: "warning", title: "Warning", description: "desc" },
  storyName: "告警提示",
  render: (args: ArgsProps) => <Alert {...args} />,
};

export const Danger: Story = {
  args: { type: "danger", title: "Danger", description: "desc" },
  storyName: "危险提示",
  render: (args: ArgsProps) => <Alert {...args} />,
};

Default.storyName = "默认提示";
Success.storyName = "成功提示";
Warning.storyName = "告警提示";
Danger.storyName = "危险提示";
