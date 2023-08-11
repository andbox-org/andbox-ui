import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SmSize: Story = {
  args: {
    children: 'JD',
    size: 'sm',
    image: {
      src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    },
  },
};

export const MdSize: Story = {
  args: {
    children: 'JD',
    size: 'md',
    image: {
      src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    },
  },
};

export const LgSize: Story = {
  args: {
    children: 'JD',
    size: 'lg',
    image: {
      src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    },
  },
};

export const FallbackWithSmSize: Story = {
  args: {
    children: 'JD',
    size: 'sm',
  },
};

export const FallbackWithMdSize: Story = {
  args: {
    size: 'md',
    children: 'JD',
  },
};

export const FallbackWithLgSize: Story = {
  args: {
    children: 'JD',
    size: 'lg',
  },
};
