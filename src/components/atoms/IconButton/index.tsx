import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, HTMLAttributes, forwardRef } from 'react';
import { IconType } from 'react-icons';

type CommonIconButtonProps = {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg';
  color?: 'neutral' | 'primary';
};

export type IconButtonProps = (
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      as?: 'button';
    })
  | (HTMLAttributes<HTMLSpanElement> & {
      as: 'span';
    })
) &
  CommonIconButtonProps;

export const IconButton = forwardRef<HTMLButtonElement | HTMLSpanElement, IconButtonProps>(({
  icon,
  size = 'md',
  color = 'neutral',
  className,
  ...props
}, ref) => {
  const Icon = icon;
  const iconClassName = clsx(
    color === 'primary' ? 'text-primary' : 'text-on-surface',
    size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
  );
  const wrapperClassName = clsx(
    'p-1',
    'rounded-full',
    color === 'primary' ? 'hover:bg-primary/10' : 'hover:bg-on-surface/10',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-outline-variant',
    'disabled:opacity-50',
    'disabled:bg-transparent',
    'disabled:cursor-not-allowed',
    className,
  );

  if (props.as === 'span') {
    const { as: _, ...spanProps } = props;
    return (
      <span
        ref={ref as ForwardedRef<HTMLSpanElement>}
        className={wrapperClassName}
        {...spanProps}
      >
        <Icon className={iconClassName} />
      </span>
    );
  }

  // tag = button
  const { as: _, ...buttonProps } = props;
  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={wrapperClassName}
      {...buttonProps}
    >
      <Icon className={iconClassName} />
    </button>
  );
});
