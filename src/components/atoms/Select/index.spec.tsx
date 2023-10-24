import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select } from './index';

const setup = (jsx: JSX.Element) => ({
  user: userEvent.setup(),
  ...render(jsx),
});

describe('Select', () => {
  it('renders', () => {
    const { container } = render(
      <Select.Root>
        <Select.Option>Option One</Select.Option>
        <Select.Option>Option Two</Select.Option>
        <Select.Option>Option Three</Select.Option>
      </Select.Root>
    );
    expect(container).toBeInTheDocument();
  });

  it('renders with className', () => {
    render(<Select.Root className="test" />);
    expect(screen.getByRole('combobox')).toHaveClass('test');
  });

  it('renders with error', () => {
    render(<Select.Root error />);
    expect(screen.getByRole('combobox')).toHaveAttribute('data-error', 'true');
  });

  it('should select correct value when the option selected', async () => {
    const { user } = setup(
      <Select.Root defaultValue="apple">
        <Select.OptionGroup label="Fruits">
          <Select.Option value="apple">Apple</Select.Option>
          <Select.Option value="banana">Banana</Select.Option>
          <Select.Option value="orange">Orange</Select.Option>
        </Select.OptionGroup>
        <Select.OptionGroup label="Drinks">
          <Select.Option value="coffee">Coffee</Select.Option>
          <Select.Option value="tea">Tea</Select.Option>
          <Select.Option value="milk">Milk</Select.Option>
        </Select.OptionGroup>
      </Select.Root>
    );
    expect(screen.getByRole<HTMLOptionElement>('option', { name: 'Apple' }).selected).toBe(true);
    await user.selectOptions(screen.getByRole('combobox'), 'Milk');
    expect(screen.getByRole<HTMLOptionElement>('option', { name: 'Milk' }).selected).toBe(true);
  });
});


