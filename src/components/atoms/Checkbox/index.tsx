import { FC } from 'react';
import {
  Root,
  Indicator,
  CheckboxProps as _CheckboxProps,
} from '@radix-ui/react-checkbox';
import { BsCheck, BsDash } from 'react-icons/bs';
import clsx from 'clsx';

export type CheckboxProps = _CheckboxProps & {
  symbol?: 'check' | 'dash';
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  symbol = 'check',
  error,
  className,
  ...props
}) => {
  return (
    <Root
      data-error={error}
      checked={checked}
      {...props}
      className={clsx(
        ['flex', 'items-center', 'justify-center'],
        ['w-5', 'h-5'],
        ['rounded', 'border'],
        [
          [
            'data-[state=checked]:bg-on-surface',
            'data-[state=checked]:border-0',
          ],
          [
            'data-[state=unchecked]:bg-surface',
            'data-[state=unchecked]:border-outline',
          ],
          [
            'data-[state=unchecked]:bg-surface',
            'data-[state=indeterminate]:border-outline',
          ],
        ],
        ['data-[error=true]:border-error', 'data-[error=true]:border-2'],
        ['disabled:opacity-50', 'disabled:cursor-not-allowed'],
        className
      )}
    >
      <Indicator>
        {symbol === 'check' ? (
          <BsCheck className="w-4 h-4 text-surface" />
        ) : (
          <BsDash className="w-4 h-4 text-surface" />
        )}
      </Indicator>
    </Root>
  );
};
