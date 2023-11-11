import clsx from 'clsx';
import { ReactNode } from 'react';
import { BsCheckLg, BsExclamationTriangle, BsX } from 'react-icons/bs';
import { IconButton } from '../../atoms/IconButton';

export type AlertProps = {
  variant: 'danger' | 'success';
  children: ReactNode;
  withCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
};

export const Alert = ({ variant, children, withCloseButton, onClose, className }: AlertProps) => {
  return (
    <div
      className={clsx(
        'p-4',
        'rounded-md',
        variant === 'danger'
          ? 'bg-error-container'
          : variant === 'success'
          ? 'bg-success-container'
          : null,
        className
      )}
    >
      <div className="flex">
        <div className="shrink-0">
          {variant === 'danger' ? (
            <BsExclamationTriangle className="w-5 h-5 text-error" />
          ) : variant === 'success' ? (
            <BsCheckLg className="w-5 h-5 text-success" />
          ) : null}
        </div>
        <div className="ml-3">
          <div className="text-sm text-on-surface">{children}</div>
        </div>
        {withCloseButton ? (
          <div className="pl-3 ml-auto">
            <div className="-my-1 -mx-1">
              <IconButton
                icon={BsX} 
                onClick={onClose}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
