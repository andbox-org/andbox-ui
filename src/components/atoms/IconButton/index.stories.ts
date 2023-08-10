import type { Meta, StoryObj } from '@storybook/react';
import { BsCheck, BsThreeDotsVertical, BsHouse } from 'react-icons/bs';

import { IconButton } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: [ 'sm', 'md', 'lg' ] },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HouseMd: Story = {
  args: {
    icon: BsHouse,
    size: 'md',
  },
};

export const Check: Story = {
  args: {
    icon: BsCheck,
  },
};

export const ThreeDotsVertical: Story = {
  args: {
    icon: BsThreeDotsVertical,
  },
};

export const HouseSm: Story = {
  args: {
    icon: BsHouse,
    size: 'sm',
  },
};

export const CheckSm: Story = {
  args: {
    icon: BsCheck,
    size: 'sm',
  },
};

export const ThreeDotsVerticalSm: Story = {
  args: {
    icon: BsThreeDotsVertical,
    size: 'sm',
  },
};

export const HouseLg: Story = {
  args: {
    icon: BsHouse,
    size: 'lg',
  },
};

export const CheckLg: Story = {
  args: {
    icon: BsCheck,
    size: 'lg',
  },
};

export const ThreeDotsVerticalLg: Story = {
  args: {
    icon: BsThreeDotsVertical,
    size: 'lg',
  },
};

export const Primary: Story = {
  args: {
    icon: BsHouse,
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    icon: BsHouse,
    disabled: true,
  },
};
