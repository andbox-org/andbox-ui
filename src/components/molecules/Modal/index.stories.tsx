import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../../atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Modal',
  component: Modal.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Modal.Root>;

export default meta;
type Story = StoryObj<typeof Modal.Root>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  render: () => (
    <Modal.Root>
      <Modal.Trigger><Button>Open</Button></Modal.Trigger>
      <Modal.Portal>
        <Modal.Content>
          <Modal.Title>タイトル</Modal.Title>
          <Modal.Description>説明文</Modal.Description>
          <Modal.Actions>
            <Modal.Close><Button variant="neutral-outlined">キャンセル</Button></Modal.Close>
            <Button>続行する</Button>
          </Modal.Actions>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  ),
};
