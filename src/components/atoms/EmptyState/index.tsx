import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type EmptyStateProps = {
  description: string;
  supportSlot?: ReactNode;
  outlined?: boolean;
  children?: ReactNode;
  className?: string;
};

export const EmptyState: FC<EmptyStateProps> = ({
  description,
  supportSlot,
  outlined,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'w-full',
        'flex flex-col items-center justify-center gap-3',
        'px-8 py-8 md:py-12',
        outlined ? 'border border-outline-variant rounded-xl' : undefined,
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="font-sans font-bold text-base text-center text-on-surface">
          {description}
        </p>
        {supportSlot && (
          <div className="font-sans text-sm text-center text-on-surface">
            {supportSlot}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
};
