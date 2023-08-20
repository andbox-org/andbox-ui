import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WithDropdownMenu } from './index';

describe('WithDropdownMenu', () => {
  it('renders', () => {
    const { container } = render(<WithDropdownMenu menuFactory={({ Content, Item }) => (
      <Content>
        <a href="#"><Item>Anchor Link</Item></a>
        <button className="w-full" onClick={() => alert('clicked')}><Item>Button</Item></button>
        <Item>Item</Item>
      </Content> 
    )}>
      <button>Click Me</button>
    </WithDropdownMenu>);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should be open when trigger clicked & menuitem can be selected', async () => {
    const onSelect = jest.fn();
    render(<WithDropdownMenu menuFactory={({ Content, Item }) => (
      <Content>
        <Item onSelect={onSelect}>Item</Item>
      </Content> 
    )}>
      <button>Click Me</button>
    </WithDropdownMenu>);
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByRole('menu')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByRole('menuitem')).toBeInTheDocument());

    expect(onSelect).not.toHaveBeenCalled()
    userEvent.click(screen.getByRole('menuitem'));
    await waitFor(() => expect(onSelect).toHaveBeenCalled());
  });

  it('should be closed when trigger clicked and menu item clicked', async () => {
    render(<WithDropdownMenu menuFactory={({ Content, Item }) => (
      <Content>
        <Item>Item</Item>
      </Content> 
    )}>
      <button>Click Me</button>
    </WithDropdownMenu>);
    userEvent.click(screen.getByText('Click Me'));
    await waitFor(() => expect(screen.getByRole('menu')).toBeInTheDocument());
    userEvent.click(screen.getByRole('menuitem'));
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });
});
