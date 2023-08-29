import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export type FormFieldSetProps = ComponentPropsWithoutRef<'fieldset'> & {
  layout?: 'vertical' | 'horizontal';
  legend: string;
  supportSlot?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const FieldSet = forwardRef<HTMLFieldSetElement, FormFieldSetProps>(
  ({ layout = 'vertical', legend, supportSlot, children, className }, ref) => {
    return (
      <fieldset className={clsx('w-full', className)} ref={ref}>
        <legend className="font-sans font-medium text-on-surface">{legend}</legend>
        {supportSlot && <p className="font-sans text-sm text-on-surface mt-1">{supportSlot}</p>}
        <div className={clsx('mt-3', 'flex gap-2', layout === 'vertical' ? 'flex-col' : 'flex-row')}>
          {children}
        </div>
      </fieldset>
    );
  }
);
