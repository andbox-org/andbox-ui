import type { Meta, StoryObj } from '@storybook/react';
import { BsCheck, BsThreeDotsVertical, BsHouse } from 'react-icons/bs';

import { Card } from './index';
import { UserSummary } from '../../molecules/UserSummary';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    tag: { control: 'select', options: [ 'div', 'a', 'button' ] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyUserSummary = (
  <UserSummary
    name={'鈴木 一郎'}
    email={'ichiro.suzuki@andbox.org'}
    image={{
      src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    }}
    fallback={'鈴'}
    badgeLabel={'オーガナイザー'}
  />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DivTag: Story = {
  args: {
    children: dummyUserSummary,
  },
};

export const AnchorTag: Story = {
  args: {
    tag: 'a',
    href: '#',
    children: dummyUserSummary,
    actionLabel: '開く',
  },
};

export const ButtonTag: Story = {
  args: {
    tag: 'button',
    children: dummyUserSummary,
    actionLabel: '選ぶ',
  },
};

export const Disabled: Story = {
  args: {
    tag: 'button',
    children: dummyUserSummary,
    actionLabel: '選ぶ',
    disabled: true,
  },
};
