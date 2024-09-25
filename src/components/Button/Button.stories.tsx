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
  tags: ["!autodocs"], // autodocs | !autodocs  使用 & 禁用
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = JSX.IntrinsicAttributes & ButtonProps;

export const Default: Story = (args: ArgsProps) => {
  return (
    <Button {...args} type="default">
      Default
    </Button>
  );
};

export const Primary: Story = (args: ArgsProps) => {
  return (
    <Button {...args} type="primary">
      Primary
    </Button>
  );
};

export const Success: Story = (args: ArgsProps) => {
  return (
    <Button {...args} type="success">
      Success
    </Button>
  );
};

export const Danger: Story = (args: any) => {
  return (
    <Button {...args} type="danger">
      Danger
    </Button>
  );
};

export const Link: Story = (args: any) => {
  return (
    <Button {...args} type="link">
      Link
    </Button>
  );
};

export const Secondary: Story = (args: any) => {
  return (
    <Button {...args} type="secondary">
      Secondary
    </Button>
  );
};

export const Info: Story = (args: any) => {
  return (
    <Button {...args} type="info">
      Info
    </Button>
  );
};

export const Warning: Story = (args: any) => {
  return (
    <Button {...args} type="warning">
      Warning
    </Button>
  );
};
export const Light: Story = (args: any) => {
  return (
    <Button {...args} type="light">
      Light
    </Button>
  );
};
export const Dark: Story = (args: any) => {
  return (
    <Button {...args} type="dark">
      Dark
    </Button>
  );
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
