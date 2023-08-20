import { render } from '@testing-library/react';

import { AvatarArray } from '.';

describe('AvatarArray', () => {
  it('renders', () => {
    const { container } = render(<AvatarArray avatars={[
      { children: 'AB' },
      { children: 'CD' },
      { children: 'EF' },
    ]} />);
    expect(container).toBeInTheDocument();
  });

  it('renders with className', () => {
    const { container } = render(<AvatarArray className="test" avatars={[
      { children: 'AB' },
      { children: 'CD' },
      { children: 'EF' },
    ]} />);
    expect(container.querySelector('.test')).toBeInTheDocument();
  });
});
