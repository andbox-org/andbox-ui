import type { Meta, StoryObj } from '@storybook/react';

import { AvatarArray } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/AvatarArray',
  component: AvatarArray,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof AvatarArray>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    avatars: [
      {
        image: {
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        },
        children: '鈴',
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        },
        children: '鈴',
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        },
        children: '鈴',
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        },
        children: '鈴',
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        },
        children: '鈴',
      },
    ],
  },
};

export const Fallback: Story = {
  args: {
    avatars: [
      { children: '鈴' },
      { children: '山' },
      { children: '佐' },
      { children: '田' },
      { children: '太' },
    ],
  },
};

