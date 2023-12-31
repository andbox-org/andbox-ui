import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './index';

describe('Button', () => {
  it('renders', () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be disabled when `disabled` prop is true', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} disabled>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should be disabled when `loading` prop is true', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} loading>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('can receive ref as button', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Test</Button>);
    expect(ref.current).toBeInTheDocument();
  });

  it('can render as span', () => {
    render(<Button as="span">Test</Button>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('can receive as span', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Button as="span" ref={ref}>Test</Button>);
    expect(ref.current).toBeInTheDocument();
  });
});
