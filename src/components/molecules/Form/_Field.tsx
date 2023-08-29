import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export type FormFieldProps = ComponentPropsWithoutRef<'div'> &
  (
    | {
        horizontal?: boolean;
        reverse?: false;
      }
    | {
        horizontal: true;
        reverse: true;
      }
  ) & {
    lightLabel?: boolean;
    label: string;
    children: ReactNode;
    supportSlot?: ReactNode;
    errorSlot?: ReactNode;
    disabled?: boolean;
    className?: string;
  };

export const Field = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      horizontal,
      reverse,
      lightLabel,
      label,
      children,
      supportSlot,
      errorSlot,
      disabled,
      className,
    },
    ref
  ) => {
    return (
      <div
        className={clsx('flex', 'flex-col', 'gap-2', 'group', className)}
        data-error={!!errorSlot}
        aria-disabled={disabled}
      >
        <label
          className={clsx(
            'inline-flex gap-2',
            horizontal && !reverse
              ? 'flex-row'
              : horizontal && reverse
              ? 'flex-row-reverse justify-end'
              : 'flex-col',
            horizontal ? 'items-center' : undefined,
            'cursor-pointer group-aria-disabled:cursor-not-allowed'
          )}
        >
          <span
            className={clsx(
              'font-sans',
              lightLabel ? 'font-normal' : 'font-medium',
              'group-aria-disabled:opacity-70'
            )}
          >
            {label}
          </span>
          {children}
        </label>
        {errorSlot || supportSlot ? (
          <div className={clsx('flex', 'flex-col', 'gap-2')}>
            {errorSlot && (
              <p
                className={clsx(
                  'font-sans',
                  'text-sm',
                  'text-error',
                  'hidden',
                  'group-data-[error=true]:block'
                )}
              >
                {errorSlot}
              </p>
            )}
            {supportSlot && (
              <p className={clsx('font-sans', 'text-sm', 'text-on-surface')}>
                {supportSlot}
              </p>
            )}
          </div>
        ) : null}
      </div>
    );
  }
);
