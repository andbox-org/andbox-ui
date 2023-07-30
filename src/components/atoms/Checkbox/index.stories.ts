import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    symbol: { control: 'select', options: [ 'check', 'dash' ] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Check: Story = {
  args: {
    symbol: 'check',
  },
};

export const Dash: Story = {
  args: {
    symbol: 'dash',
  },
};

export const Disabled: Story = {
  args: {
    symbol: 'check',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    symbol: 'check',
    error: true,
  },
};
