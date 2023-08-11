import { render, screen, waitFor } from '@testing-library/react';

import { Avatar } from './index';

describe('Avatar', () => {
  it('renders with fallback', async () => {
    const { container } = render(
      <Avatar
        image={{
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        }}
      >
        TS
      </Avatar>
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText('TS')).toBeInTheDocument(); // in jest, image doesn't seem to be loaded
  });
});
