import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../../atoms/Button';

import { Modal } from '.';

describe('Modal', () => {
  it('renders a trigger button', () => {
    render(
      <Modal.Root>
        <Modal.Trigger><Button>Open</Button></Modal.Trigger>
      </Modal.Root>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders a portal when a trigger button clicked', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger><Button>Open</Button></Modal.Trigger>
        <Modal.Portal>
          <Modal.Content>
            <p>Modal Content</p>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    );
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Modal Content')).toBeInTheDocument());
  });

  it('renders a title', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger><Button>Open</Button></Modal.Trigger>
        <Modal.Portal>
          <Modal.Content>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    );
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Modal Title')).toBeInTheDocument());
  });

  it('renders a description', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger><Button>Open</Button></Modal.Trigger>
        <Modal.Portal>
          <Modal.Content>
            <Modal.Description>Modal Description</Modal.Description>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    );
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Modal Description')).toBeInTheDocument());
  });

  it('should close when a close button clicked', async () => {
    render(
      <Modal.Root>
        <Modal.Trigger><Button>Open</Button></Modal.Trigger>
        <Modal.Portal>
          <Modal.Content>
            <Modal.Close><Button>Close</Button></Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    );
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Close')).toBeInTheDocument());
    userEvent.click(screen.getByText('Close'));
    await waitFor(() => expect(screen.queryByText('Close')).not.toBeInTheDocument());
  });

  it('renders a portal when open prop is true', () => {
    render(
      <Modal.Root open>
        <Modal.Portal>
          <Modal.Content>
            <p>Modal Content</p>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    );
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });
});
