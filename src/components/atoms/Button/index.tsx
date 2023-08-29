import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

type ButtonCommonProps = {
  children: string;
  variant?:
    | 'primary'
    | 'danger'
    | 'neutral-filled'
    | 'neutral-outlined'
    | 'neutral-text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export type ButtonProps = (
  | ComponentPropsWithoutRef<'button'> & {
      as?: 'button';    
      loading?: boolean;
    }
  | ComponentPropsWithoutRef<'span'> & {
      as: 'span';
      disabled?: boolean;
  }
) & ButtonCommonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLSpanElement, ButtonProps>(({
  children,
  variant = 'neutral-filled',
  color = 'primary',
  size = 'md',
  disabled = false,
  className,
  ...props
}, ref) => {
  const shapeClassName = {
    'rounded-lg': variant !== 'neutral-text',
    border: variant === 'neutral-outlined',
  };

  const disabledOpacityClassName = 
    props.as === 'span' ? 'aria-disabled:opacity-30' : 'disabled:data-[loading=false]:opacity-30';

  const containerColorClassName =
    variant === 'primary'
      ? ['bg-primary', disabledOpacityClassName, 'hover:data-[loading=false]:opacity-80']
      : variant === 'danger'
      ? ['bg-error', disabledOpacityClassName, 'hover:data-[loading=false]:opacity-80']
      : variant === 'neutral-outlined'
      ? ['border-outline-variant', 'bg-surface', disabledOpacityClassName, 'hover:data-[loading=false]:opacity-70']
      : variant === 'neutral-text'
      ? []
      : ['bg-on-surface', disabledOpacityClassName, 'hover:data-[loading=false]:opacity-80']; // neutral-filled
  
  const labelClassName = [
    size ==='lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm',
    variant === 'primary' ? ['text-on-primary']
    : variant === 'danger' ? ['text-on-error']
    : variant === 'neutral-outlined' ? ['text-on-surface']
    : variant === 'neutral-text' ? ['text-on-surface', props.as === 'span' ? 'group-aria-disabled:opacity-30' : 'group-disabled:opacity-30']
    : ['text-surface'] // neutral-filled
  ];
  
  const ringClassName = variant === 'neutral-outlined' ? ['ring-1', 'ring-inset', 'ring-outline-variant'] : [];

  const cursorClassName = [
    'data-[loading=true]:cursor-progress', 
    props.as === 'button' ? 'disabled:data-[loading=false]:cursor-not-allowed' : 'aria-disabled:cursor-not-allowed',
  ];

  const sizeClassName =
    size === 'lg'
      ? 'text-base leading-4'
      : size === 'sm'
      ? 'text-xs leading-3'
      : 'text-sm leading-[0.875rem]';

  const paddingClassName =
    variant !== 'neutral-text'
      ? size === 'lg'
        ? 'px-5 py-3'
        : size === 'sm'
        ? 'px-3 py-1.5'
        : 'px-4 py-2'
      : size === 'lg'
      ? 'px-2 py-2'
      : size === 'sm'
      ? 'px-1 py-1'
      : 'px-2 py-2';

  const fontClassName =
    variant === 'neutral-text' ? 'font-medium' : 'font-bold';

  const borderClassName = variant === 'neutral-outlined' ? 'border' : '';

  const gapClassName = size === 'sm' ? 'gap-1' : size === 'lg' ? 'gap-2' : 'gap-2';

  const loadingColorClassName =
    variant === 'primary' ? 'border-on-primary'
    : variant === 'danger' ? 'border-on-error'
    : variant === 'neutral-outlined' ? 'border-on-surface'
    : variant === 'neutral-text' ? 'border-on-surface'
    : 'border-surface';

  const loadingSizeName =
    size === 'sm' ? 'h-3 w-3 border-2'
    : size === 'lg' ? 'h-5 w-5 border-2'
    : 'h-4 w-4 border-2';

  const buttonClassName = clsx(
    ['group', 'relative'],
    cursorClassName,
    ['inline-flex', 'items-center', 'justify-center'],
    gapClassName,
    fontClassName,
    paddingClassName,
    shapeClassName,
    borderClassName,
    containerColorClassName,
    sizeClassName,
    ringClassName,
    className
  );

  if (props.as === 'span') {
    const { as: _, ...spanProps } = props;
    return (
      <span
        {...spanProps}
        ref={ref as ForwardedRef<HTMLSpanElement>}
        className={buttonClassName}
        aria-disabled={disabled}
      >
        <span className={clsx(labelClassName)}>{children}</span>
      </span>
    );
  }

  const { as: _, loading, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={buttonClassName}
      data-loading={!!loading}
      disabled={!!loading || disabled}
    >
      <span className={clsx('group-data-[loading=true]:invisible', labelClassName)}>{children}</span>
      <div className={clsx(
        ['hidden', 'group-data-[loading=true]:inline-block'],
        ['absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2'],
      )}>
        <div className="flex justify-center" aria-label="読み込み中">
          <span
            className={clsx(
              ['animate-spin', 'rounded-full', 'border-t-transparent'],
              sizeClassName,
              loadingColorClassName,
              loadingSizeName,
            )}
          />
        </div>
      </div>
    </button>
  );
});
