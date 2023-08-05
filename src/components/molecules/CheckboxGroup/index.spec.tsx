import { fireEvent, render, screen } from '@testing-library/react';

import { CheckboxGroup } from './index';

describe('CheckboxGroup', () => {
  it('renders', () => {
    const { container } = render(<CheckboxGroup>Test</CheckboxGroup>);
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should be checked when `checked` prop is true', () => {
    render(<CheckboxGroup checked>Test</CheckboxGroup>);
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should be checked when checkbox clicked', () => {
    render(<CheckboxGroup>Test</CheckboxGroup>);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should be checked when label clicked', () => {
    render(<CheckboxGroup>Test</CheckboxGroup>);
    fireEvent.click(screen.getByText('Test'));
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('it should be not checked but calls onClieck in `a` tag when `a` tag in label clicked', () => {
    const onClick = jest.fn();
    const onCheckedChange = jest.fn();
    render(<CheckboxGroup onCheckedChange={onCheckedChange}>This is <a href="#" onClick={onClick}>Link</a>.</CheckboxGroup>);
    fireEvent.click(screen.getByText('Link'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('should not be checked when the support text clicked', () => {
    render(<CheckboxGroup supportSlot="Support">Test</CheckboxGroup>);
    fireEvent.click(screen.getByText('Support'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('should not be checked when the error text clicked', () => {
    render(<CheckboxGroup errorSlot="Error">Test</CheckboxGroup>);
    fireEvent.click(screen.getByText('Error'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('it should be disabled but calls onClieck in `a` tag when `a` tag in label clicked', () => {
    const onClick = jest.fn();
    const onCheckedChange = jest.fn();
    render(<CheckboxGroup disabled onCheckedChange={onCheckedChange}>This is <a href="#" onClick={onClick}>Link</a>.</CheckboxGroup>);
    fireEvent.click(screen.getByText('Link'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('should not be checked when clicked but disabled', () => {
    render(<CheckboxGroup disabled>Test</CheckboxGroup>);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('calls onCheckedChange when clicked', () => {
    const onCheckedChange = jest.fn();
    render(<CheckboxGroup onCheckedChange={onCheckedChange}>Test</CheckboxGroup>);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalled();
  });
});