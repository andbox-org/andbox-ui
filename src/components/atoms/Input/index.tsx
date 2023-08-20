import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  size?: 'sm' | 'md';
  error?: boolean;
  className?: string;
};

export const Input: FC<InputProps> = ({ size = 'md', error, className, ...props }) => {
  return (
    <input
      data-error={error}
      {...props}
      className={clsx(
        size === 'sm' ? ['py-1.5', 'px-2.5'] : ['py-2', 'px-3'],
        ['bg-surface'],
        [size === 'sm' ? 'text-xs' : 'text-sm', 'text-on-surface', 'placeholder:text-outline'],
        ['rounded-lg', 'border', 'border-outline-variant'],
        ['ring-1', 'ring-outline-variant'],
        ['focus:outline-none', 'focus:border-outline'],
        ['data-[error=true]:ring-error'],
        ['disabled:opacity-50', 'disabled:cursor-not-allowed'],
        className,
      )}
    />
  );
};
