import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type SectionContentProps = {
  children: ReactNode;
  className?: string;
}

export const Content: FC<SectionContentProps> = ({ children, className }) => {
  return (
    <div className={clsx('flex', 'flex-col', 'gap-4', className)}>
      {children}
    </div>
  );
};
