import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    symbol: { control: 'select', options: [ 'check', 'dash' ] },
    children: { control: 'text' },
    supportSlot: { control: 'text' },
    errorSlot: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    children: <><a href="#" className="text-primary underline">利用規約</a>に同意しますか？</>,
    symbol: 'check',
  },
};

export const Disabled: Story = {
  args: {
    children: '利用規約に同意しますか？',
    symbol: 'check',
    disabled: true,
  },
};

export const WithSupportText: Story = {
  args: {
    children: '利用規約に同意しますか？',
    symbol: 'check',
    supportSlot: '未成年の方は保護者の同意を得てからチェックしてください。',
  },
};


export const Error: Story = {
  args: {
    children: '利用規約に同意しますか？',
    symbol: 'check',
    supportSlot: '未成年の方は保護者の同意を得てからチェックしてください。',
    error: true,
    errorSlot: 'サービスを利用するには利用規約に同意する必要があります。',
  },
};
