import { FC, ReactNode, RefAttributes, forwardRef } from 'react';
import clsx from 'clsx';

import { TextArea, TextAreaProps } from '../../../atoms/TextArea';

export type TextAreaFieldProps = Omit<TextAreaProps, 'error'> & {
  label: string;
  supportSlot?: ReactNode;
  errorSlot?: ReactNode;
  className?: string;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(({
  label,
  supportSlot,
  errorSlot,
  className,
  disabled,
  ...props
}, ref) => {
  const error = !!errorSlot;
  return (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'group', 'w-full', className)} data-error={error} aria-disabled={disabled}>
      <label className={clsx(['flex', 'flex-col', 'gap-2', 'cursor-pointer', 'group-aria-disabled:cursor-not-allowed'])}>
        <span className={clsx('font-sans', 'text-sm', 'font-medium', 'group-aria-disabled:opacity-70')}>{label}</span>
        <TextArea {...props} ref={ref} error={error} disabled={disabled} />
      </label>
      <div className={clsx('flex', 'flex-col', 'gap-2')}>
        { errorSlot && <p className={clsx('font-sans', 'text-sm', 'text-error', 'hidden', 'group-data-[error=true]:block')}>{errorSlot}</p> }
        { supportSlot && <p className={clsx('font-sans', 'text-sm', 'text-on-surface')}>{supportSlot}</p> }
      </div>
    </div>
  );
});
