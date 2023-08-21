import { render } from '@testing-library/react';

import { Section } from '.';

describe('Secion.Content', () => {
  it('renders', () => {
    const { container } = render(<Section.Content>Test</Section.Content>);
    expect(container).toBeInTheDocument();
  });
  it('renders with children', () => {
    const { container } = render(<Section.Content>Test</Section.Content>);
    expect(container).toHaveTextContent('Test');
  });

  it('renders with className', () => {
    const { container } = render(<Section.Content className="test">Test</Section.Content>);
    expect(container.firstChild).toHaveClass('test');
  });
});
