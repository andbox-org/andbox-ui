import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

import { Section } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Section.Header',
  component: Section.Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text', defaultValue: 'タイトル' },
    description: { control: 'text', defaultValue: '説明文' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Section.Header>;

export default meta;
type Story = StoryObj<typeof Section.Header>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    title: '担当クラス',
    description: '自分が先生として担当しているクラスが表示されます。',
  },
  render: ({ title, description, className }) => (
    <Section.Header title={title} description={description}>
      <Button>アクション1</Button>
      <Button variant="neutral-outlined">アクション2</Button>
    </Section.Header>
  ),
};

export const NoActions: Story = {
  args: {
    title: '担当クラス',
    description: '自分が先生として担当しているクラスが表示されます。',
  },
};
