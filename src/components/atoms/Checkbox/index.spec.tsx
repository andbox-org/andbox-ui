import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './index';

describe('Checkbox', () => {
  it('renders', () => {
    const { container } = render(<Checkbox />);
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('should be checked when `checked` prop is true', () => {
    render(<Checkbox checked/>);
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should be checked when clicked', () => {
    render(<Checkbox />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should not be checked when clicked but disabled', () => {
    render(<Checkbox disabled />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('calls onCheckedChange when clicked', () => {
    const onCheckedChange = jest.fn();
    render(<Checkbox onCheckedChange={onCheckedChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalled();
  });
});
