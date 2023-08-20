import { render } from '@testing-library/react';

import { Section } from '.';

describe('Secion.Header', () => {
  it('renders', () => {
    const { container } = render(<Section.Header title="Title" />);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Title');
  });
  it('renders with description', () => {
    const { container } = render(<Section.Header title="Title" description="Description" />);
    expect(container).toHaveTextContent('Description');
  });
  it('renders with children', () => {
    const { container } = render(<Section.Header title="Title">Test</Section.Header>);
    expect(container).toHaveTextContent('Test');
  });

  it('renders with className', () => {
    const { container } = render(<Section.Header title="Title" className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });
});
