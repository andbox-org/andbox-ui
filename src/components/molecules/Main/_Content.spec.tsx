import { render } from '@testing-library/react';

import { Main } from '.';

describe('Main.Content', () => {
  it('renders', () => {
    const { container } = render(<Main.Content>Test</Main.Content>);
    expect(container).toBeInTheDocument();
  });
  it('renders with children', () => {
    const { container } = render(<Main.Content>Test</Main.Content>);
    expect(container).toHaveTextContent('Test');
  });

  it('renders with className', () => {
    const { container } = render(<Main.Content className="test">Test</Main.Content>);
    expect(container.firstChild).toHaveClass('test');
  });
});
