import type { Meta, StoryObj } from '@storybook/react';

import { ModalContentTemplate } from './index';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/ModalContentTemplate',
  component: ModalContentTemplate,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'danger', 'success'],
    },
    layout: {
      control: 'select',
      options: ['align-left', 'align-center'],
    },
  },
} satisfies Meta<typeof ModalContentTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    title: 'タイトル',
    layout: 'align-center',
    variant: 'danger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    primaryAction: {
      label: '続行する',
      onClick: () => {},
    },
  },
  render: (props) => (
    <Modal.Root>
      <Modal.Trigger>
        <Button>Open</Button>
      </Modal.Trigger>
      <Modal.Portal>
        <ModalContentTemplate {...props} />
      </Modal.Portal>
    </Modal.Root>
  ),
}

export const TwoButtons: Story = {
  args: {
    title: 'タイトル',
    layout: 'align-center',
    variant: 'danger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    primaryAction: {
      label: '続行する',
      onClick: () => {},
    },
    secondaryAction: {
      label: 'キャンセル',
      close: true,
    },
  },
  render: (props) => (
    <Modal.Root>
      <Modal.Trigger>
        <Button>Open</Button>
      </Modal.Trigger>
      <Modal.Portal>
        <ModalContentTemplate {...props} />
      </Modal.Portal>
    </Modal.Root>
  ),
}
