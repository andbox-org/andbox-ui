import {
  Content,
  DropdownMenuContentProps
} from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { forwardRef } from 'react';

export type _DropdownMenuContentProps = DropdownMenuContentProps;

export const _Content = forwardRef<HTMLDivElement, DropdownMenuContentProps>(({ className, ...props }, ref) => {
  return (
    <Content
      {...props}
      className={clsx(
        ['py-2'],
        ['bg-surface'],
        ['border', 'border-outline-variant'],
        ['shadow-lg', 'rounded-lg'],
        ['origin-dropdown-menu-content', 'scale-100'],
        className
      )}
      style={{
        transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)',
      }}
      ref={ref}
    />
  );
});
