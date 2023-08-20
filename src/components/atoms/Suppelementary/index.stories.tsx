import type { Meta, StoryObj } from '@storybook/react';

import { Suppelementary } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Suppelementary',
  component: Suppelementary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: [ 'sm', 'md' ] },
  },
} satisfies Meta<typeof Suppelementary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    size: 'md',
    items: [
      { label: '授業コード', value: '1234-1234-1234' },
      { label: '有効期間', value: '2023年7月23日 12:00～14:00まで' },
    ],
  },
};
