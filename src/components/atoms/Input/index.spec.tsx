import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './index';

describe('Input', () => {
  it('renders', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });

  it('renders with error', () => {
    render(<Input error />);
    expect(screen.getByRole('textbox')).toHaveClass('ring-error');
  });

  it('renders with className', () => {
    render(<Input className="test" />);
    expect(screen.getByRole('textbox')).toHaveClass('test');
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="test" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  it('renders with disabled', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toHaveClass('opacity-50');
    expect(screen.getByRole('textbox')).toHaveClass('cursor-not-allowed');
  });

  it('renders with value', () => {
    render(<Input value="test" />);
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('renders with defaultValue', () => {
    render(<Input defaultValue="test" />);
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('renders with type="text"', () => {
    render(<Input type="text" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('renders with type="password"', () => {
    render(<Input type="password" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');
  });

  it('calls onChange when changed', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('does not call onChange when disabled', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} disabled />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('calls onFocus when focused', () => {
    const onFocus = jest.fn();
    render(<Input onFocus={onFocus} />);
    fireEvent.focus(screen.getByRole('textbox'));
    expect(onFocus).toHaveBeenCalled();
  });

  it('does not call onFocus when disabled', () => {
    const onFocus = jest.fn();
    render(<Input onFocus={onFocus} disabled />);
    fireEvent.focus(screen.getByRole('textbox'));
    expect(onFocus).not.toHaveBeenCalled();
  });

  it('calls onBlur when blurred', () => {
    const onBlur = jest.fn();
    render(<Input onBlur={onBlur} />);
    fireEvent.blur(screen.getByRole('textbox'));
    expect(onBlur).toHaveBeenCalled();
  });

  it('does not call onBlur when disabled', () => {
    const onBlur = jest.fn();
    render(<Input onBlur={onBlur} disabled />);
    fireEvent.blur(screen.getByRole('textbox'));
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('calls onKeyDown when key is pressed', () => {
    const onKeyDown = jest.fn();
    render(<Input onKeyDown={onKeyDown} />);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'a' });
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('does not call onKeyDown when disabled', () => {
    const onKeyDown = jest.fn();
    render(<Input onKeyDown={onKeyDown} disabled />);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'a' });
    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('calls onKeyUp when key is released', () => {
    const onKeyUp = jest.fn();
    render(<Input onKeyUp={onKeyUp} />);
    fireEvent.keyUp(screen.getByRole('textbox'), { key: 'a' });
    expect(onKeyUp).toHaveBeenCalled();
  });

  it('does not call onKeyUp when disabled', () => {
    const onKeyUp = jest.fn();
    render(<Input onKeyUp={onKeyUp} disabled />);
    fireEvent.keyUp(screen.getByRole('textbox'), { key: 'a' });
    expect(onKeyUp).not.toHaveBeenCalled();
  });

  it('calls onPaste when pasted', () => {
    const onPaste = jest.fn();
    render(<Input onPaste={onPaste} />);
    fireEvent.paste(screen.getByRole('textbox'));
    expect(onPaste).toHaveBeenCalled();
  });

  it('does not call onPaste when disabled', () => {
    const onPaste = jest.fn();
    render(<Input onPaste={onPaste} disabled />);
    fireEvent.paste(screen.getByRole('textbox'));
    expect(onPaste).not.toHaveBeenCalled();
  });

  it('calls onInput when changed', () => {
    const onInput = jest.fn();
    render(<Input onInput={onInput} />);
    fireEvent.input(screen.getByRole('textbox'));
    expect(onInput).toHaveBeenCalled();
  });

  it('does not call onInput when disabled', () => {
    const onInput = jest.fn();
    render(<Input onInput={onInput} disabled />);
    fireEvent.input(screen.getByRole('textbox'));
    expect(onInput).not.toHaveBeenCalled();
  });
});
