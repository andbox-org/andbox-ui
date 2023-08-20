import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { Supplementary, SupplementaryItem } from '../../atoms/Supplementary';

export type MainHeaderInfoItem = {
  label: string;
  value: string;
};

export type MainHeaderProps = {
  title: string;
  subtitle?: string;
  supplementaryItems?: SupplementaryItem[];
  children?: ReactNode;
  className?: string;
};

export const Header: FC<MainHeaderProps> = ({
  title,
  subtitle,
  supplementaryItems,
  children,
  className,
}) => {
  return (
    <header
      className={clsx(
        ['w-full', 'py-5'],
        ['flex', children ? 'justify-between' : 'justify-center', 'items-center', 'gap-4'],
        ['border-b', 'border-outline-variant'],
        className
      )}
    >
      <div className="flex flex-col gap-2">
        {subtitle ? (
          <div className="flex flex-col gap-1">
            <div className="text-base text-primary font-bold">{title}</div>
            <div className="text-3xl text-on-surface font-bold">{subtitle}</div>
          </div>
        ) : (
          <div className="text-3xl text-primary font-bold">{title}</div>
        )}
        {supplementaryItems && <Supplementary items={supplementaryItems} />}
      </div>
      {children && (
        <div className="flex flex-row-reverse items-center gap-3.5 flex-shrink">
          {children}
        </div>
      )}
    </header>
  );
};
