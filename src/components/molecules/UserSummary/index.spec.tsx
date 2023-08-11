import { render, screen, waitFor } from '@testing-library/react';

import { UserSummary } from './index';

describe('Avatar', () => {
  it('renders with md size', () => {
    const { container } = render(
      <UserSummary
        name={'鈴木 一郎'}
        email={'ichiro.suzuki@andbox.org'}
        image={{
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        }}
        fallback={'鈴'}
        badgeLabel={'オーガナイザー'}
        size={'md'}
      />
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText('鈴木 一郎')).toBeInTheDocument();
    expect(screen.getByText('ichiro.suzuki@andbox.org')).toBeInTheDocument();
    expect(screen.getByText('オーガナイザー')).toBeInTheDocument();
  });

  it('renders with sm size', async () => {
    const { container } = render(
      <UserSummary
        name={'鈴木 一郎'}
        email={'ichiro.suzuki@andbox.org'}
        image={{
          src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        }}
        fallback={'鈴'}
        badgeLabel={'オーガナイザー'}
        size={'sm'}
      />
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText('鈴木 一郎')).toBeInTheDocument();
    expect(screen.getByText('ichiro.suzuki@andbox.org')).toBeInTheDocument();
    expect(screen.getByText('オーガナイザー')).toBeInTheDocument();
  });
});
