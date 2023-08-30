import { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

import { Checkbox, CheckboxProps } from '../../../atoms/Checkbox';

export type CheckboxFieldProps = Omit<CheckboxProps, 'error'> & {
  label: ReactNode;
  supportSlot?: ReactNode;
  errorSlot?: ReactNode;
  className?: string;
};

export const CheckboxField = forwardRef<HTMLButtonElement, CheckboxFieldProps>(({
  label,
  supportSlot,
  errorSlot,
  disabled,
  className,
  ...props
}, ref) => {
  const error = !!errorSlot;
  return (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'group')} data-error={error} aria-disabled={disabled}>
      <label className={clsx(['flex', 'items-start', 'gap-2', 'cursor-pointer', 'group-aria-disabled:cursor-not-allowed'], className)}>
        <Checkbox {...props} className="flex-shrink-0" ref={ref} error={error} disabled={disabled} />
        <span className={clsx('font-sans', 'text-sm', 'group-aria-disabled:opacity-70')}>{label}</span>
      </label>
      <div className={clsx('ml-7', 'flex', 'flex-col', 'gap-2')}>
        { supportSlot && <p className={clsx('font-sans', 'text-sm', 'text-on-surface')}>{supportSlot}</p> }
        { errorSlot && <p className={clsx('font-sans', 'text-sm', 'text-error', 'hidden', 'group-data-[error=true]:block')}>{errorSlot}</p> }
      </div>
    </div>
  );
});
