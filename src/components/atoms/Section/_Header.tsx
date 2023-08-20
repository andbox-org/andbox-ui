import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type SectionHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export const Header: FC<SectionHeaderProps> = ({ title, description, children, className}) => {
  return (
    <header className={clsx('w-full', 'flex', 'justify-between', 'items-start', 'gap-4', className)}>
      <div className="flex flex-col gap-3">
        <div className="text-2xl text-on-surface font-bold">{title}</div>
        {description && <div className="text-sm text-on-surface">{description}</div>}
      </div>
      <div className="flex flex-row-reverse items-center gap-3.5 flex-shrink">
        {children}
      </div>
    </header>
  );
}