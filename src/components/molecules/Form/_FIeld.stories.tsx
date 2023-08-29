import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './index';
import { Input } from '../../atoms/Input';
import { Checkbox } from '../../atoms/Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Form.Field',
  component: Form.Field,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    supportSlot: { control: 'text' },
    errorSlot: { control: 'text' },
  },
} satisfies Meta<typeof Form.Field>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    label: 'メールアドレス',
    children: <Input placeholder="example@example.com" />,
  },
};

export const CheckboxField: Story = {
  args: {
    label: '利用規約に同意する',
    children: <Checkbox disabled />,
    horizontal: true,
    reverse: true,
  },
}