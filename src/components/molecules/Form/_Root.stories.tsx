import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './index';
import { Input } from '../../atoms/Input';
import { Checkbox } from '../../atoms/Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Form.Root',
  component: Form.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Form.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    children: (
      <>
        <Form.FieldSet
          legend="氏名"
          supportSlot="クレジットカードの名義と同じである必要があります。"
          layout="horizontal"
        >
          <Form.TextField label="姓" placeholder="山田" />
          <Form.TextField label="名" placeholder="太郎" />
        </Form.FieldSet>
        <Form.TextField label="メールアドレス" placeholder="example@example.com" />
        <Form.FieldSet legend="何をきっかけに知りましたか？">
          <Form.CheckboxField label="Twitter" />
          <Form.CheckboxField label="Webサイト" />
          <Form.CheckboxField label="その他" />
        </Form.FieldSet>
        <Form.TextAreaField label="自由記入欄" rows={6} />
        <Form.CheckboxField label="利用規約に同意する" />
      </>
    ),
  },
};
