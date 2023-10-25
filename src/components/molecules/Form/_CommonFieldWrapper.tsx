import { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import { Button, ButtonProps } from '../../atoms/Button';

export type CommonFieldWrapperProps = {
  children: ReactNode;
  label: string;
  supportSlot?: ReactNode;
  errorSlot?: ReactNode;
  disabled?: boolean;
  className?: string;
  sideButton?: {
    label: string;
    variant: ButtonProps['variant'];
  } & ({
    type?: 'button';
    onClick: MouseEventHandler<HTMLButtonElement>;
  } | {
    type: 'submit';
    onClick?: MouseEventHandler<HTMLButtonElement>;
  });
};

export const CommonFieldWrapper: FC<CommonFieldWrapperProps> = ({
  children,
  label,
  supportSlot,
  errorSlot,
  className,
  disabled,
  sideButton: { label: sideButtonLabel, ...sideButtonProps } = {},
}) => {
  const error = !!errorSlot;
  return (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'group', 'w-full', className)} data-error={error} aria-disabled={disabled}>
      <label className={clsx(['flex', 'flex-col', 'gap-2', 'cursor-pointer', 'group-aria-disabled:cursor-not-allowed'])}>
        <span className={clsx('font-sans', 'text-sm', 'font-medium', 'group-aria-disabled:opacity-70')}>{label}</span>
        <div className="flex w-full items-center gap-2">
          {children}
          {sideButtonLabel && <Button className="shrink-0" size="sm" {...sideButtonProps}>{sideButtonLabel}</Button>}
        </div>
      </label>
      <div className={clsx('flex', 'flex-col', 'gap-2')}>
        { errorSlot && <p className={clsx('font-sans', 'text-sm', 'text-error', 'hidden', 'group-data-[error=true]:block')}>{errorSlot}</p> }
        { supportSlot && <p className={clsx('font-sans', 'text-sm', 'text-on-surface')}>{supportSlot}</p> }
      </div>
    </div>
  );
};
