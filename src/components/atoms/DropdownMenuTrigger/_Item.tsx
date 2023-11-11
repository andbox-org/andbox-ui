import { ReactNode, forwardRef } from 'react';
import { Item, MenuItemProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

// Radix primitive API: https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item

export type DropdownMenuItemProps = MenuItemProps & {
  children: ReactNode;
  className?: string;
};

export const _Item = forwardRef<HTMLDivElement, DropdownMenuItemProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <Item
      {...props}
      className={clsx(
        ['flex', 'items-center'],
        ['px-4', 'py-2'],
        ['text-sm', 'text-on-surface'],
        ['select-none'],
        ['hover:bg-surface-container'],
        ['focus:bg-surface-container'],
        ['focus:outline-none'],
        ['cursor-pointer'],
        ['disabled:opacity-50', 'disabled:cursor-not-allowed'],
        className
      )}
      ref={ref}
    >
      {children}
    </Item>
  );
});
