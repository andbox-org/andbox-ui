import { FC } from 'react';

export type BadgeProps = {
  children: string;
  className?: string;
};

export const Badge: FC<BadgeProps> = ({ children, className }) => {
  return (
    <div className={`
      inline-flex items-center rounded-full 
      bg-surface-container
      px-2 py-0.5 
      text-xs font-medium text-on-surface font-sans
      ring-1 ring-inset ring-outline-variant
      ${className}
    `}>
      {children}
    </div>
  );
};
