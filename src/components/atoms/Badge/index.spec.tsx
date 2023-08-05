import { render, screen } from '@testing-library/react';

import { Badge } from './index';

describe('Badge', () => {
  it('renders', () => {
    const { container } = render(<Badge>Test</Badge>);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
