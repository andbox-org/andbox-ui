import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['danger', 'success'],
    },
    withCloseButton: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'This is a danger alert — check it out!',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success alert — check it out!',
  },
};

export const LongText: Story = {
  args: {
    variant: 'danger',
    children: 'This is a danger alert with a very long text that will wrap to the next line. This is a danger alert with a very long text that will wrap to the next line. This is a danger alert with a very long text that will wrap to the next line.',
  },
};

export const WithClose: Story = {
  args: {
    variant: 'danger',
    withCloseButton: true,
    children: 'This is a danger alert — check it out!',
  },
};

export const LongTextWithClose: Story = {
  args: {
    variant: 'danger',
    withCloseButton: true,
    children: 'This is a danger alert with a very long text that will wrap to the next line. This is a danger alert with a very long text that will wrap to the next line. This is a danger alert with a very long text that will wrap to the next line.',
  },
};
