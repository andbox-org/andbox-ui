import { fireEvent, render, screen } from '@testing-library/react';
import { BsCheck, BsThreeDotsVertical, BsHouse } from 'react-icons/bs';

import { IconButton } from './index';

describe('IconButton', () => {
  it('renders with tag="a"', () => {
    render(<IconButton icon={BsCheck} tag="a" href="#"/>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('renders with tag="button"', () => {
    render(<IconButton icon={BsCheck} tag="button"/>);
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
});
