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
  tags: ["!autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {},
  args: { onClose: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = JSX.IntrinsicAttributes & AlertProps;

export const Default: Story = (args: ArgsProps) => {
  return <Alert {...args} type="default" title="Default" description="desc" />;
};

export const Success: Story = (args: ArgsProps) => {
  return <Alert {...args} type="success" title="Success" description="desc" />;
};

export const Warning: Story = (args: ArgsProps) => {
  return <Alert {...args} type="warning" title="Warning" description="desc" />;
};

export const Danger: Story = (args: ArgsProps) => {
  return <Alert {...args} type="danger" title="Danger" description="desc" />;
};

Default.storyName = "默认提示";
Success.storyName = "成功提示";
Warning.storyName = "告警提示";
Danger.storyName = "危险提示";
