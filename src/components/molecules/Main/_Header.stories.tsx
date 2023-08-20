import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../atoms/Button';

import { Main } from '.';
import { UserSummary } from '../UserSummary';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Main.Header',
  component: Main.Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text', defaultValue: 'クラス' },
    subtitle: { control: 'text', defaultValue: '第一小学校5年1組' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Main.Header>;

export default meta;
type Story = StoryObj<typeof Main.Header>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    title: 'ホーム',
  },
  render: ({ title, subtitle }) => (
    <Main.Header title={title} subtitle={subtitle}>
      <UserSummary
        name="鈴木 一郎"
        email="ichiro.suzuki@andbox.org"
        image={{
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        }}
        fallback="鈴"
        badgeLabel="オーガナイザー"
        size="md"
      />
    </Main.Header>
  ),
};

export const WithSubtitle: Story = {
  args: {
    title: 'クラス',
    subtitle: '第一小学校5年1組',
  },
  render: ({ title, subtitle }) => (
    <Main.Header title={title} subtitle={subtitle}>
      <Button>編集する</Button>
      <Button variant="neutral-text">削除</Button>
    </Main.Header>
  ),
};

export const WithSupplementary: Story = {
  args: {
    title: 'クラス',
    subtitle: '第一小学校5年1組',
    supplementaryItems: [
      { label: '授業コード', value: '1234-1234-1234' },
      { label: '有効期間', value: '2023年7月23日 12:00～14:00まで' },
    ],
  },
  render: ({ title, subtitle, supplementaryItems }) => (
    <Main.Header
      title={title}
      subtitle={subtitle}
      supplementaryItems={supplementaryItems}
    >
      <Button>編集する</Button>
      <Button variant="neutral-text">削除</Button>
    </Main.Header>
  ),
};

export const NoContent: Story = {
  args: {
    title: '授業の作成',
  },
};
