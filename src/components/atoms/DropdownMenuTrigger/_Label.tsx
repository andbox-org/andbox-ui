import { ReactNode, forwardRef } from 'react';
import { Label, MenuLabelProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

// Radix primitive API: https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label

export type DropdownMenuLabelProps = MenuLabelProps & {
  children: ReactNode;
  className?: string;
};

export const _Label = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <Label
      {...props}
      className={clsx(
        'font-sans font-medium text-xs text-on-surface opacity-60',
        'px-4 pt-1.5 pb-1',
        className
      )}
      ref={ref}
    >
      {children}
    </Label>
  );
});
