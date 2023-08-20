import { render } from '@testing-library/react';

import { Section } from '.';

describe('Secion.Root', () => {
  it('renders', () => {
    const { container } = render(<Section.Root>Test</Section.Root>);
    expect(container).toBeInTheDocument();
  });
  it('renders with children', () => {
    const { container } = render(<Section.Root>Test</Section.Root>);
    expect(container).toHaveTextContent('Test');
  });

  it('renders with className', () => {
    const { container } = render(<Section.Root className="test">Test</Section.Root>);
    expect(container.firstChild).toHaveClass('test');
  });
});
