import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { Section } from '../../atoms/Section';
import { UserSummary } from '../UserSummary';

import { Main } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Main.Root',
  component: Main.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Main.Root>;

export default meta;
type Story = StoryObj<typeof Main.Root>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => (
    <Main.Root>
      <Main.Header title="ホーム">
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
      <Main.Content>
        <Section.Root>
          <Section.Header
            title="担当クラス"
            description="自分が先生として担当しているクラスが表示されます。"
          >
            <Button>クラスを追加</Button>
          </Section.Header>
          <Card>コンテンツがここに入ります。</Card>
        </Section.Root>
        <Section.Root>
          <Section.Header
            title="在籍クラス"
            description="自分が生徒として在籍しているクラスが表示されます。"
          />
          <Card>コンテンツがここに入ります。</Card>
        </Section.Root>
      </Main.Content>
    </Main.Root>
  ),
};
