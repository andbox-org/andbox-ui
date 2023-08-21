import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

import { Section } from '.';
import { Card } from '../Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Section.Root',
  component: Section.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Section.Root>;

export default meta;
type Story = StoryObj<typeof Section.Root>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => (
    <Section.Root>
      <Section.Header title="担当クラス" description="自分が先生として担当しているクラスが表示されます。">
        <Button>アクション1</Button>
        <Button variant="neutral-outlined">アクション2</Button>
      </Section.Header>
      <Section.Content>
        <Card>
          コンテンツがここに入ります。
        </Card>
      </Section.Content>
    </Section.Root>
  ),
};

