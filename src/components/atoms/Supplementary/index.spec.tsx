import { render, screen } from '@testing-library/react';

import { Supplementary } from '.';

describe('Supplementary', () => {
  it('renders', () => {
    const { container } = render(<Supplementary items={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('renders with className', () => {
    const { container } = render(<Supplementary items={[]} className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });

  it('renders with items', () => {
    render(<Supplementary items={[
      { label: 'Item1', value: 'value1' },
      { label: 'Item2', value: 'value2' },
    ]} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    
    expect(list).toHaveTextContent('Item1');
    expect(list).toHaveTextContent('value1');
    expect(list).toHaveTextContent('Item2');
    expect(list).toHaveTextContent('value2');
  });
});
