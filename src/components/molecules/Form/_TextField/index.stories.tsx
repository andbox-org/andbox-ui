import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Form.TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    supportSlot: { control: 'text' },
    errorSlot: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    label: 'ラベル',
    placeholder: 'プレースホルダー',
  },
};

export const Disabled: Story = {
  args: {
    label: 'ラベル',
    placeholder: 'プレースホルダー',
    disabled: true,
  },
};

export const WithSupportText: Story = {
  args: {
    label: 'ラベル',
    placeholder: 'プレースホルダー',
    supportSlot: 'ヒントテキストがここに表示されます。',
  },
};


export const Error: Story = {
  args: {
    label: 'ラベル',
    supportSlot: 'ヒントテキストがここに表示されます。',
    errorSlot: '必須入力です',
  },
};
