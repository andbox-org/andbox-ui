import clsx from 'clsx';
import { FC } from 'react';

export type SupplementaryItem = {
  value: string;
  label?: string;
};

export type SupplementaryProps = {
  items: SupplementaryItem[];
  className?: string;
};

export const Supplementary: FC<SupplementaryProps> = ({
  items,
  className,
}) => {
  return (
    <ul className={clsx('flex', className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={clsx(
            ['flex', 'items-center', 'gap-1.5'],
            ['px-3', 'border-r', 'border-outline-variant'],
            ['first:pl-0', 'last:pr-0', 'last:border-0'],
          )}
        >
          {item.label && <span className="text-sm text-on-surface">{item.label}</span>}
          <span className="text-base text-on-surface font-medium">{item.value}</span>
        </li>
      ))}
    </ul>
  );
};
