import { fireEvent, render, screen } from '@testing-library/react';

import { Card } from './index';

describe('Card', () => {
  it('renders', () => {
    const { container } = render( <Card >Content</Card>);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with tag="a"', () => {
    render(<Card tag={'a'} href={'#'} actionLabel={'Action'}>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders with tag="button"', () => {
    render(<Card tag={'button'} actionLabel={'Action'}>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('calls onClick when clicked with tag="button"', () => {
    const onClick = jest.fn();
    render(<Card tag={'button'} onClick={onClick}>Content</Card>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled with tag="button"', () => {
    const onClick = jest.fn();
    render(<Card tag={'button'} onClick={onClick} disabled>Content</Card>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick when clicked with tag="a"', () => {
    const onClick = jest.fn();
    render(<Card tag={'a'} href={'#'} onClick={onClick}>Content</Card>);
    fireEvent.click(screen.getByRole('link'));
    expect(onClick).toHaveBeenCalled();
  });
});
