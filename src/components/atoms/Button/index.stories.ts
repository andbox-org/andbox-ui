import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    buttonType: {
      control: 'select',
      options: [
        'primary',
        'danger',
        'neutral-filled',
        'neutral-outlined',
        'neutral-text',
      ],
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
      ],
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    buttonType: 'primary',
    size: 'md',
    children: 'アクション',
  },
};

export const NeutralFilled: Story = {
  args: {
    buttonType: 'neutral-filled',
    size: 'md',
    children: 'アクション',
  },
};

export const NeutralOutined: Story = {
  args: {
    buttonType: 'neutral-outlined',
    size: 'md',
    children: 'アクション',
  },
};

export const NeutralText: Story = {
  args: {
    buttonType: 'neutral-text',
    size: 'md',
    children: 'アクション',
  },
};


export const PrimaryLoading: Story = {
  args: {
    buttonType: 'primary',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const NeutralFilledLoading: Story = {
  args: {
    buttonType: 'neutral-filled',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const NeutralOutlinedLoading: Story = {
  args: {
    buttonType: 'neutral-outlined',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};


export const NeutralTextLoading: Story = {
  args: {
    buttonType: 'neutral-text',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    buttonType: 'primary',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const NeutralFilledDisabled: Story = {
  args: {
    buttonType: 'neutral-filled',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const NeutralOutlinedDisabled: Story = {
  args: {
    buttonType: 'neutral-outlined',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};


export const NeutralTextDisabled: Story = {
  args: {
    buttonType: 'neutral-text',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};
