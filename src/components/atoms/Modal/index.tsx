import * as Dialog from '@radix-ui/react-dialog';
import type {
  DialogTriggerProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogPortalProps,
  DialogContentProps,
  DialogCloseProps,
} from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { FC, ReactNode, forwardRef } from 'react';

const Trigger = forwardRef<HTMLButtonElement, Omit<DialogTriggerProps, 'asChild'>>((props, ref) => (
  <Dialog.Trigger
    {...props}
    ref={ref}
    asChild
  />
));

const Title = forwardRef<HTMLHeadingElement, DialogTitleProps>((props, ref) => (
  <Dialog.Title
    {...props}
    ref={ref}
    className="text-xl font-bold"
  />
));

const Description = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  (props, ref) => (
    <Dialog.Description
      {...props}
      ref={ref}
      className="text-sm text-on-surface"
    />
  ),
);

const Portal: FC<DialogPortalProps> = ({ children, ...props }) => (
  <Dialog.Portal {...props}>
    <Dialog.Overlay className={clsx(
      'fixed inset-0',
      'bg-on-surface opacity-50',
      'w-screen h-screen',
    )} />
    {children}
  </Dialog.Portal>
);

const Content: FC<DialogContentProps> = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <Dialog.Content
      ref={ref}
      {...props}
      className={clsx(
        'w-full max-w-md',
        'bg-surface rounded-xl shadow-lg py-4 px-5',
        'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        className,
      )}
    >
      {children}
    </Dialog.Content>
  ),
);

const Close = forwardRef<HTMLButtonElement, Omit<DialogCloseProps, 'asChild'>>(
  (props, ref) => (
    <Dialog.Close
      {...props}
      ref={ref}
      asChild
    />
  ),
);

export type ModalActionsProps = {
  children: ReactNode;
  className?: string;
};

const Actions: FC<ModalActionsProps> = ({ children, className }) => (
  <div className={clsx(
    'flex gap-2 justify-end',
    className,
  )}>
    {children}
  </div>
);


export const Modal = {
  Root: Dialog.Root,
  Trigger,
  Portal,
  Content,
  Title,
  Description,
  Close,
  Actions,
};
