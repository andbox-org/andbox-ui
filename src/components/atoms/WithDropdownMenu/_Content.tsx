import {
  Content,
  DropdownMenuContentProps
} from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

export type _DropdownMenuContentProps = DropdownMenuContentProps;

export const _Content = ({ className, ...props }: DropdownMenuContentProps) => {
  return (
    <Content
      {...props}
      className={clsx(
        ['w-64'],
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
    />
  );
}
