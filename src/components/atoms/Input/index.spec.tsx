import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './index';

describe('Input', () => {
  it('renders', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });

  it('renders with className', () => {
    render(<Input className="test" />);
    expect(screen.getByRole('textbox')).toHaveClass('test');
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="test" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  it('renders with value', () => {
    render(<Input defaultValue="test" />);
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

  it('calls onChange when changed', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('calls onFocus when focused', () => {
    const onFocus = jest.fn();
    render(<Input onFocus={onFocus} />);
    fireEvent.focus(screen.getByRole('textbox'));
    expect(onFocus).toHaveBeenCalled();
  });

  it('calls onBlur when blurred', () => {
    const onBlur = jest.fn();
    render(<Input onBlur={onBlur} />);
    fireEvent.blur(screen.getByRole('textbox'));
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onKeyDown when key is pressed', () => {
    const onKeyDown = jest.fn();
    render(<Input onKeyDown={onKeyDown} />);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'a' });
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('calls onKeyUp when key is released', () => {
    const onKeyUp = jest.fn();
    render(<Input onKeyUp={onKeyUp} />);
    fireEvent.keyUp(screen.getByRole('textbox'), { key: 'a' });
    expect(onKeyUp).toHaveBeenCalled();
  });

  it('calls onPaste when pasted', () => {
    const onPaste = jest.fn();
    render(<Input onPaste={onPaste} />);
    fireEvent.paste(screen.getByRole('textbox'));
    expect(onPaste).toHaveBeenCalled();
  });

  it('calls onInput when changed', () => {
    const onInput = jest.fn();
    render(<Input onInput={onInput} />);
    fireEvent.input(screen.getByRole('textbox'));
    expect(onInput).toHaveBeenCalled();
  });
});
