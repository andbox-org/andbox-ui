import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { Input, InputProps } from '../../atoms/Input';

export type InputGroupProps = InputProps & {
  label: string;
  supportSlot?: ReactNode;
  errorSlot?: ReactNode;
  className?: string;
};

export const InputGroup: FC<InputGroupProps> = ({
  label,
  supportSlot,
  errorSlot,
  error,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'group', 'w-full', className)} data-error={error} aria-disabled={disabled}>
      <label className={clsx(['flex', 'flex-col', 'gap-2', 'cursor-pointer', 'group-aria-disabled:cursor-not-allowed'])}>
        <span className={clsx('font-sans', 'text-sm', 'font-bold', 'group-aria-disabled:opacity-70')}>{label}</span>
        <Input {...props} error={error} disabled={disabled} />
      </label>
      <div className={clsx('flex', 'flex-col', 'gap-2')}>
        { errorSlot && <p className={clsx('font-sans', 'text-sm', 'text-error', 'hidden', 'group-data-[error=true]:block')}>{errorSlot}</p> }
        { supportSlot && <p className={clsx('font-sans', 'text-sm', 'text-on-surface')}>{supportSlot}</p> }
      </div>
    </div>
  );
};
