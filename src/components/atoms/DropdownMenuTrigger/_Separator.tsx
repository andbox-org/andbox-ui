import { forwardRef } from 'react';
import { Separator, MenuSeparatorProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

// Radix primitive API: https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator

export type DropdownMenuSeparatorProps = MenuSeparatorProps & {
  className?: string;
};

export const _Separator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <Separator
      {...props}
      className={clsx(
        'h-px',
        'my-1',
        'bg-outline-variant', 
        className,
      )}
      ref={ref}
    />
  );
});
