import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BsCheck } from 'react-icons/bs';

import { IconButton } from './index';

describe('IconButton', () => {
  it('renders as span', () => {
    const { container } = render(<IconButton icon={BsCheck} as="span"/>);
    expect(container).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders as button', () => {
    render(<IconButton icon={BsCheck} as="button"/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<IconButton icon={BsCheck} onClick={onClick}/>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled', () => {
    const onClick = jest.fn();
    render(<IconButton icon={BsCheck} onClick={onClick} disabled/>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('can receive ref as button', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton icon={BsCheck} ref={ref}>Test</IconButton>);
    expect(ref.current).toBeInTheDocument();
  });

  it('can receive ref as span', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton icon={BsCheck} ref={ref} as="span">Test</IconButton>);
    expect(ref.current).toBeInTheDocument();
  });
});
