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
    variant: {
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
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'アクション',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'アクション',
  },
};

export const DangerOutlined: Story = {
  args: {
    variant: 'danger-outlined',
    size: 'md',
    children: 'アクション',
  },
};

export const DangerText: Story = {
  args: {
    variant: 'danger-text',
    size: 'md',
    children: 'アクション',
  },
};

export const NeutralFilled: Story = {
  args: {
    variant: 'neutral-filled',
    size: 'md',
    children: 'アクション',
  },
};

export const NeutralOutined: Story = {
  args: {
    variant: 'neutral-outlined',
    size: 'md',
    children: 'アクション',
  },
};

export const NeutralText: Story = {
  args: {
    variant: 'neutral-text',
    size: 'md',
    children: 'アクション',
  },
};

export const PrimaryLoading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const DangerLoading: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const DangerOutlinedLoading: Story = {
  args: {
    variant: 'danger-outlined',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const DangerTextLoading: Story = {
  args: {
    variant: 'danger-text',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const NeutralFilledLoading: Story = {
  args: {
    variant: 'neutral-filled',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const NeutralOutlinedLoading: Story = {
  args: {
    variant: 'neutral-outlined',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};


export const NeutralTextLoading: Story = {
  args: {
    variant: 'neutral-text',
    size: 'md',
    children: 'アクション',
    loading: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const DangerDisabled: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const DangerOutlinedDisabled: Story = {
  args: {
    variant: 'danger-outlined',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const DangerTextDisabled: Story = {
  args: {
    variant: 'danger-text',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const NeutralFilledDisabled: Story = {
  args: {
    variant: 'neutral-filled',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const NeutralOutlinedDisabled: Story = {
  args: {
    variant: 'neutral-outlined',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};


export const NeutralTextDisabled: Story = {
  args: {
    variant: 'neutral-text',
    size: 'md',
    children: 'アクション',
    disabled: true,
  },
};

export const AsSpan: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'アクション',
    as: 'span',
  },
};

export const AsSpanDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'アクション',
    as: 'span',
    disabled: true,
  },
};

