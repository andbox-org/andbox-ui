import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Select.Root',
  component: Select.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: 'md',
    error: false,
  },
  render: (props) => (
    <Select.Root {...props}>
      <Select.Option>Option One</Select.Option>
      <Select.Option>Option Two</Select.Option>
      <Select.Option>Option Three</Select.Option>
    </Select.Root>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
    error: false,
  },
  render: (props) => (
    <Select.Root {...props}>
      <Select.Option>Option One</Select.Option>
      <Select.Option>Option Two</Select.Option>
      <Select.Option>Option Three</Select.Option>
    </Select.Root>
  ),
};


export const OptionGroup: Story = {
  args: {
    size: 'md',
    error: false,
  },
  render: (props) => (
    <Select.Root {...props}>
      <Select.OptionGroup label="Fruits">
        <Select.Option>Apple</Select.Option>
        <Select.Option>Banana</Select.Option>
        <Select.Option>Orange</Select.Option>
      </Select.OptionGroup>
      <Select.OptionGroup label="Drinks">
        <Select.Option>Coffee</Select.Option>
        <Select.Option>Tea</Select.Option>
        <Select.Option>Milk</Select.Option>
      </Select.OptionGroup>
    </Select.Root>
  ),
};
