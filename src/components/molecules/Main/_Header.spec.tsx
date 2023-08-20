import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('Secion.Header', () => {
  it('renders', () => {
    const { container } = render(<Main.Header title="Title" />);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Title');
  });
  it('renders with subtitle', () => {
    const { container } = render(<Main.Header title="Title" subtitle="Subtitle" />);
    expect(container).toHaveTextContent('Subtitle');
  });
  it('renders with children', () => {
    const { container } = render(<Main.Header title="Title">Test</Main.Header>);
    expect(container).toHaveTextContent('Test');
  });

  it('renders with className', () => {
    const { container } = render(<Main.Header title="Title" className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });

  it('renders with supplementary', () => {
    render(<Main.Header title="Title" supplementaryItems={[
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
