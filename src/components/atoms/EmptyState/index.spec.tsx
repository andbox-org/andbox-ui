import { screen, getByRole, render } from '@testing-library/react';

import { EmptyState } from '.';

describe('EmptyState', () => {
  it('should render successfully', () => {
    const { container } = render(<EmptyState description="This is test" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render description', () => {
    const { getByText } = render(<EmptyState description="This is test" />);
    expect(getByText('This is test')).toBeInTheDocument();
  });

  it('should render supportSlot (string)', () => {
    const { getByText } = render(
      <EmptyState description="This is test" supportSlot="Support Slot" />,
    );
    expect(getByText('Support Slot')).toBeInTheDocument();
  });

  it('should render supportSlot (ReactNode)', () => {
    const { getByText } = render(
      <EmptyState description="This is test" supportSlot={<><a href="#">Link</a> here</>} />,
    );
    expect(screen.getByRole('link')).toHaveTextContent('Link');
  });

  it('should render children', () => {
    const { getByText } = render(
      <EmptyState description="This is test">
        <div>Children</div>
      </EmptyState>,
    );
    expect(getByText('Children')).toBeInTheDocument();
  });
});
