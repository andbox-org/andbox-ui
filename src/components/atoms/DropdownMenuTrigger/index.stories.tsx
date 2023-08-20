import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { DropdownMenuTrigger } from './index';
import { IconButton } from '../IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/DropdownMenuTrigger',
  component: DropdownMenuTrigger,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof DropdownMenuTrigger>;

export default meta;
type Story = StoryObj<typeof DropdownMenuTrigger>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => (
    <DropdownMenuTrigger menuFactory={({ Content, Item }) => (
      <Content>
        <a href="#"><Item>Anchor Link</Item></a>
        <button className="w-full" onClick={() => alert('clicked')}><Item>Button</Item></button>
        <Item>Item</Item>
      </Content> 
    )}>
      <IconButton icon={BsThreeDotsVertical} />
    </DropdownMenuTrigger>
  ),
};
