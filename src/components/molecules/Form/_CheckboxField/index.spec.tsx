import { fireEvent, render, screen } from '@testing-library/react';

import { CheckboxField } from './index';

describe('CheckboxField', () => {
  it('renders', () => {
    const { container } = render(<CheckboxField label="Test" />);
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should be checked when `checked` prop is true', () => {
    render(<CheckboxField label="Test" checked>Test</CheckboxField>);
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should be checked when checkbox clicked', () => {
    render(<CheckboxField label="Test" />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('should be checked when label clicked', () => {
    render(<CheckboxField label="Test" />);
    fireEvent.click(screen.getByText('Test'));
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

  it('it should be not checked but calls onClieck in `a` tag when `a` tag in label clicked', () => {
    const onClick = jest.fn();
    const onCheckedChange = jest.fn();
    render(<CheckboxField label={<>This is <a href="#" onClick={onClick}>Link</a>.</>} onCheckedChange={onCheckedChange} />);
    fireEvent.click(screen.getByText('Link'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('should not be checked when the support text clicked', () => {
    render(<CheckboxField label="Test" supportSlot="Support" />);
    fireEvent.click(screen.getByText('Support'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('should not be checked when the error text clicked', () => {
    render(<CheckboxField label="Test" errorSlot="Error" />);
    fireEvent.click(screen.getByText('Error'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('it should be disabled but calls onClieck in `a` tag when `a` tag in label clicked', () => {
    const onClick = jest.fn();
    const onCheckedChange = jest.fn();
    render(<CheckboxField label={<>This is <a href="#" onClick={onClick}>Link</a>.</>} disabled onCheckedChange={onCheckedChange} />);
    fireEvent.click(screen.getByText('Link'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('should not be checked when clicked but disabled', () => {
    render(<CheckboxField label="Test" disabled />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox', { checked: false })).toBeInTheDocument();
  });

  it('calls onCheckedChange when clicked', () => {
    const onCheckedChange = jest.fn();
    render(<CheckboxField label="Test" onCheckedChange={onCheckedChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalled();
  });
});