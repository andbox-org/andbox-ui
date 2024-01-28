import { ReactNode, forwardRef } from 'react';
import { BsCheck, BsExclamationTriangle } from 'react-icons/bs';
import clsx from 'clsx';

import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';

export type ModalContentTemplateProps = {
  title: string;
  description?: ReactNode;
  variant?: 'default' | 'danger' | 'success';
  layout?: 'align-left' | 'align-center';
  children?: ReactNode;
  primaryAction: {
    label: string;
    loading?: boolean;
    disabled?: boolean;
  } & (
    | {
        type?: 'button';
        form?: undefined;
        close?: false;
        onClick: () => void;
      }
    | {
        type?: 'button';
        form?: undefined;
        close: true;
        onClick?: () => void;
      }
    | {
        type: 'submit';
        form: string;
        close?: boolean;
        onClick?: () => void;
      }
  );
  secondaryAction?: {
    label: string;
    loading?: boolean;
    disabled?: boolean;
  } & (
    | {
        close?: false;
        onClick: () => void;
      }
    | {
        close: true;
        onClick?: () => void;
      }
  );
};

export const ModalContentTemplate = forwardRef<HTMLDivElement, ModalContentTemplateProps>(({
  title,
  description,
  variant = 'default',
  layout = 'align-left',
  children,
  primaryAction,
  secondaryAction,
}, ref) => {

  return (
    <Modal.Content className="flex flex-col gap-6" ref={ref}>
      <_Layout layout={layout}>
        <_Mark variant={variant} />
        <_Body title={title} description={description}>
          {children}
        </_Body>
      </_Layout>
      <div className="flex gap-2 justify-between">
        {secondaryAction && <_SecondaryButton {...secondaryAction} />}
        <_PrimaryButton variant={variant} {...primaryAction} />
      </div>
    </Modal.Content>
  );
});

const _Body = ({
  title,
  description,
  children,
}: Pick<
  ModalContentTemplateProps,
  'title' | 'description' | 'layout' | 'children'
>) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <Modal.Title className="text-lg font-bold">{title}</Modal.Title>
        {description && <Modal.Description>{description}</Modal.Description>}
      </div>
      {children}
    </div>
  );
};

const _Mark = ({ variant }: Pick<ModalContentTemplateProps, 'variant'>) => {
  if (variant === 'default') return null;
  return (
    <div
      className={clsx(
        'w-12 h-12 flex items-center justify-center flex-none rounded-full',
        variant === 'danger' ? 'bg-error-90' : 'bg-success-100'
      )}
    >
      {variant === 'danger' && (
        <BsExclamationTriangle className="w-5 h-5 text-error" />
      )}
      {variant === 'success' && <BsCheck className="w-8 h-8 text-success" />}
    </div>
  );
};

const _Layout = ({
  layout,
  children,
}: Pick<ModalContentTemplateProps, 'layout'> & { children: ReactNode }) => {
  return (
    <div
      className={clsx(
        'flex gap-4 w-full',
        layout === 'align-center'
          ? 'flex-col items-center text-center pt-4'
          : null
      )}
    >
      {children}
    </div>
  );
};

const _PrimaryButton = ({
  close,
  variant,
  label,
  ...props
}: Pick<ModalContentTemplateProps, 'variant'> &
  ModalContentTemplateProps['primaryAction']) => {
  return (
    <_ModalCloseSwitch close={close}> 
      <Button
        {...props}
        className="w-full"
        variant={variant === 'danger' ? 'danger' : 'primary'}
      >
        {label}
      </Button>
    </_ModalCloseSwitch>
  );
};

const _SecondaryButton = forwardRef<
  HTMLButtonElement,
  NonNullable<ModalContentTemplateProps['secondaryAction']>
>(({ close, label, ...props }, ref) => (
  <_ModalCloseSwitch close={close}> 
    <Button {...props} ref={ref} className="w-full" variant="neutral-outlined">
      {label}
    </Button>
  </_ModalCloseSwitch>
));

const _ModalCloseSwitch = ({
  close,
  children,
}: {
  children: ReactNode;
  close?: boolean;
}) => {
  if (close) return <Modal.Close>{children}</Modal.Close>;
  return children;
};
