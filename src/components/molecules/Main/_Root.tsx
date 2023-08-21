import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type MainRootProps = {
  children: ReactNode;
  className?: string;
}

export const Root: FC<MainRootProps> = ({ children, className }) => {
  return (
    <main className={clsx('flex', 'flex-col', 'gap-16', className)}>
      {children}
    </main>
  );
};
