import { fireEvent, render, screen } from '@testing-library/react';

import { Card } from './index';

describe('Card', () => {
  it('renders', () => {
    const { container } = render( <Card >Content</Card>);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
