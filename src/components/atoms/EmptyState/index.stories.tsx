import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

import { EmptyState } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined: Story = {
  args: {
    description: 'まだ生徒がいません',
    supportSlot: '最初の生徒を追加しましょう。',
    outlined: true,
  },
  render: ({ description, supportSlot, outlined }) => (
    <EmptyState
      description={description}
      supportSlot={supportSlot}
      outlined={outlined}
    >
      <Button>追加する</Button>
      <Button variant="neutral-outlined">まとめて登録</Button>
    </EmptyState>
  ),
};

export const NoSupport: Story = {
  args: {
    description: '現在、授業は行われていません',
    outlined: true,
  },
  render: ({ description, supportSlot, outlined }) => (
    <EmptyState
      description={description}
      supportSlot={supportSlot}
      outlined={outlined}
    >
      <Button>開始する</Button>
    </EmptyState>
  ),
};

export const NoOutline: Story = {
  args: {
    description: '現在、授業は行われていません',
    supportSlot: '最初の生徒を追加しましょう。',
    outlined: false,
  },
  render: ({ description, supportSlot, outlined }) => (
    <EmptyState
      description={description}
      supportSlot={supportSlot}
      outlined={outlined}
    >
      <Button>開始する</Button>
    </EmptyState>
  ),
};


export const NoChildren: Story = {
  args: {
    description: '現在、授業は行われていません',
    supportSlot: '最初の生徒を追加しましょう。',
    outlined: true,
  },
  render: ({ description, supportSlot, outlined }) => (
    <EmptyState
      description={description}
      supportSlot={supportSlot}
      outlined={outlined}
    />
  ),
};
