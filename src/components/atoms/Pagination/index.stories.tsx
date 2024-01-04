import type { Meta, StoryObj } from '@storybook/react';

import { Pagination, PaginationProps } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Atoms/Pagination',
  component: Pagination,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const buttonFactory: PaginationProps['buttonFactory'] = ({
  pageNumber,
  children,
}) => <button onClick={() => alert(pageNumber)}>{children}</button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FirstPage: Story = {
  args: {
    current: 1,
    total: 13,
    centerMargin: 2,
    sidePadding: 1,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};

export const SecondPage: Story = {
  args: {
    current: 2,
    total: 13,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};

export const ThirdPage: Story = {
  args: {
    current: 3,
    total: 13,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};

export const FourthPage: Story = {
  args: {
    current: 4,
    total: 13,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};

export const FifthPage: Story = {
  args: {
    current: 5,
    total: 13,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};

export const SecondLastPage: Story = {
  args: {
    current: 12,
    total: 13,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};

export const LastPage: Story = {
  args: {
    current: 13,
    total: 13,
  },
  render: (props) => <Pagination {...props} buttonFactory={buttonFactory} />,
};
