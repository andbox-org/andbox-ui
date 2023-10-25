import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export type FormRootProps = ComponentPropsWithoutRef<'form'> & {
  children: ReactNode;
  className?: string;
};

export const Root = forwardRef<HTMLFormElement, FormRootProps>(
  ({ children, className, ...prop }, ref) => {
    return (
      <form {...prop} className={clsx('flex flex-col gap-6', className)} ref={ref}>
        {children}
      </form>
    );
  }
);
