import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type SelectOptionProps = ComponentPropsWithoutRef<'option'>;

const Option = forwardRef<HTMLOptionElement, SelectOptionProps>((props, ref) => {
  return (
    <option {...props} ref={ref} />
  );
});

export type SelectOptionGroupProps = ComponentPropsWithoutRef<'optgroup'>;

const OptionGroup = forwardRef<HTMLOptGroupElement, SelectOptionGroupProps>((props, ref) => {
  return (
    <optgroup {...props} ref={ref} />
  );
});

export type SelectRootProps = Omit<ComponentPropsWithoutRef<'select'>, 'multiple' | 'size'> & {
  size?: 'sm' | 'md';
  error?: boolean;
};

const Root = forwardRef<HTMLSelectElement, SelectRootProps>(({ size, error, className, ...props}, ref) => {
  return (
    <select
      {...props}
      data-error={error}
      ref={ref}
      className={clsx(
        size === 'sm' ? ['py-1.5', 'pl-2.5', 'pr-6'] : ['py-2', 'pl-3', 'pr-7'],
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
});

export const Select = {
  Root,
  Option,
  OptionGroup,
};
