import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type MainContentProps = {
  children: ReactNode;
  className?: string;
}

export const Content: FC<MainContentProps> = ({ children, className }) => {
  return (
    <div className={clsx('flex', 'flex-col', 'gap-12', className)}>
      {children}
    </div>
  );
};
