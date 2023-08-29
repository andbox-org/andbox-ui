import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from './index';

describe('TextField', () => {
  it('renders', () => {
    const { container } = render(<TextField label="Label" />);
    expect(container).toBeInTheDocument();
  });

  it('renders with className', () => {
    const { container } = render(<TextField label="Label" className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });

  it('renders with placeholder', () => {
    render(<TextField label="Label" placeholder="test" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  it('renders with supportSlot', () => {
    render(<TextField label="Label" supportSlot="dummy support" />);
    expect(screen.getByText('dummy support')).toBeInTheDocument();
  });

  it('renders with errorSlot', () => {
    render(<TextField label="Label" errorSlot="dummy error" />);
    expect(screen.getByText('dummy error')).toBeInTheDocument();
  });

  it('renders with disabled', () => {
    const { container } = render(<TextField label="Label" disabled />);
    expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
  });

  it('should receive a keyboard typing', async () => {
    const onChange = jest.fn();
    render(<TextField label="Label" onChange={onChange} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    expect(input.value).toBe('');
    userEvent.type(input, 'test');
    await waitFor(() => expect(onChange).toHaveBeenCalled());
    await waitFor(() => expect(input.value).toBe('test'));
  })

  it('should not receive any keyboard typing when disabled', async () => {
    const onChange = jest.fn();
    render(<TextField label="Label" onChange={onChange} disabled />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    expect(input.value).toBe('');
    userEvent.type(input, 'test');
    await waitFor(() => expect(onChange).not.toHaveBeenCalled());
    await waitFor(() => expect(input.value).toBe(''));
  });
});
