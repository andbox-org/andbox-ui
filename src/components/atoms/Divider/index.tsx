import clsx from 'clsx';
import { ReactNode } from 'react';

export type DividerProps = {
  children?: ReactNode;
  className?: string;
};

export const Divider = ({ children, className }: DividerProps) => (
  <div className={clsx(
    'w-full relative',
    className
  )}>
    <div className="absolute w-full flex items-center inset-0">
      <div className="w-full  border-t border-t-outline-variant" />
    </div>
    <div className="relative flex justify-center">
      <span className="bg-surface px-3 text-sm text-outline">
        {children}
      </span>
    </div>
  </div>
);
