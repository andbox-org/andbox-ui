import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BsPlus } from 'react-icons/bs';

import { Divider } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  args: {
    children: 'OR',
  },
  render: ({ children }) => (
    <Divider>{children}</Divider>
  ),
};

export const Icon: Story = {
  args: {
    children: <BsPlus className="w-6 h-6" />,
  },
  render: ({ children }) => (
    <Divider>{children}</Divider>
  ),
};
