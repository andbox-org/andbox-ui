import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type SectionRootProps = {
  children: ReactNode;
  className?: string;
}

export const Root: FC<SectionRootProps> = ({ children, className }) => {
  return (
    <section className={clsx('flex', 'flex-col', 'gap-6', className)}>
      {children}
    </section>
  );
}