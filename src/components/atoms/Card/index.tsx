import clsx from 'clsx';
import { ButtonHTMLAttributes, HTMLAttributes, LinkHTMLAttributes, ReactNode, forwardRef } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hasParent?: boolean;
  disabled?: boolean;
  className?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, hasParent, disabled, className, ...props }, ref) => {
  const wrapperClassName = clsx(
    ['px-4', 'py-3'],
    ['rounded-xl', 'border', 'border-outline-variant'],
    ['bg-surface'],
    ['shadow-sm'],
    hasParent ? [
      ['group-hover:shadow-md'],
      ['group-focus:outline-none', 'group-focus:ring-1', 'group-focus:ring-outline'],
      ['group-aria-disabled:opacity-50', 'group-aria-disabled:bg-transparent', 'group-aria-disabled:shadow-none', 'group-aria-disabled:cursor-not-allowed'],
    ] : [
      ['aria-disabled:opacity-50', 'aria-disabled:bg-transparent', 'aria-disabled:shadow-none', 'aria-disabled:cursor-not-allowed'],
    ],
    className,
  );

  return (
    <div {...props} ref={ref} className={wrapperClassName} aria-disabled={disabled}>
      {children}
    </div>
  );
});
