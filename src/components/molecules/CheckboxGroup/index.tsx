import { FC } from 'react';
import clsx from 'clsx';

import { Checkbox, CheckboxProps } from '../../atoms/Checkbox';

export type CheckboxGroupProps = CheckboxProps & {
  label: string;
  supportText?: string;
  errorText?: string;
  className?: string;
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  label,
  supportText,
  errorText,
  error,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'group')} data-error={error} aria-disabled={disabled}>
      <label className={clsx(['flex', 'items-center', 'gap-2', 'cursor-pointer', 'group-aria-disabled:cursor-not-allowed'], className)}>
        <Checkbox {...props} error={error} disabled={disabled} />
        { label && <span className={clsx('font-sans', 'text-sm', 'group-aria-disabled:opacity-70')}>{label}</span> }
      </label>
      <div className={clsx('ml-7', 'flex', 'flex-col', 'gap-2')}>
        { supportText && <p className={clsx('font-sans', 'text-sm', 'text-on-surface')}>{supportText}</p> }
        { errorText && <p className={clsx('font-sans', 'text-sm', 'text-error', 'hidden', 'group-data-[error=true]:block')}>{errorText}</p> }
      </div>
    </div>
  );
};
