import { render } from '@testing-library/react';

import { Main } from '.';

describe('Secion.Root', () => {
  it('renders', () => {
    const { container } = render(<Main.Root>Test</Main.Root>);
    expect(container).toBeInTheDocument();
  });
  it('renders with children', () => {
    const { container } = render(<Main.Root>Test</Main.Root>);
    expect(container).toHaveTextContent('Test');
  });

  it('renders with className', () => {
    const { container } = render(<Main.Root className="test">Test</Main.Root>);
    expect(container.firstChild).toHaveClass('test');
  });
});
