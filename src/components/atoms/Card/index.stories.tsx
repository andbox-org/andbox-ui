import type { Meta, StoryObj } from '@storybook/react';
import { BsCheck, BsThreeDotsVertical, BsHouse } from 'react-icons/bs';

import { Card } from './index';
import { UserSummary } from '../../molecules/UserSummary';
import { DropdownMenuTrigger } from '../DropdownMenuTrigger';
import { IconButton } from '../IconButton';

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

export const Interactive: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {dummyUserSummary}
          <div>
            <DropdownMenuTrigger
              menuFactory={({ Content, Item }) => (
                <Content>
                  <Item>Item1</Item>
                </Content>
              )}
            >
              <IconButton size="sm" icon={BsThreeDotsVertical} />
            </DropdownMenuTrigger>
          </div>
        </div>
      </div>
    ),
  },
  render: ({ children }) => (
    <a href="#" className="block group outline-none">
      <Card className="pr-2" hasParent>
        {children}
      </Card>
    </a>
  ),
};

export const Disabled: Story = {
  args: {
    children: dummyUserSummary,
  },
  render: ({ children }) => (
    <Card className="pr-2" disabled>
      {children}
    </Card>
  ),
};
