import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  buttonType?:
    | 'primary'
    | 'danger'
    | 'neutral-filled'
    | 'neutral-outlined'
    | 'neutral-text';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  className?: string;
};

export const Button: FC<Props> = ({
  children,
  buttonType = 'neutral-filled',
  type = 'button',
  color = 'primary',
  size = 'md',
  loading = false,
  className,
  ...otherProps
}) => {
  const shapeClassName = {
    'rounded-lg': buttonType !== 'neutral-text',
    border: buttonType === 'neutral-outlined',
  };

  const colorClassName =
    buttonType === 'primary'
      ? 'bg-primary text-on-primary data-[loading=false]:hover:opacity-80'
      : buttonType === 'danger'
      ? 'bg-error text-on-error data-[loading=false]:hover:opacity-80'
      : buttonType === 'neutral-outlined'
      ? 'border-outline-variant bg-surface text-on-surface data-[loading=false]:hover:opacity-70'
      : buttonType === 'neutral-text'
      ? 'text-on-surface data-[loading=false]:hover:opacity-70'
      : 'bg-on-surface text-surface data-[loading=false]:hover:opacity-80';

  const sizeClassName =
    size === 'lg'
      ? 'text-base leading-4'
      : size === 'sm'
      ? 'text-xs leading-3'
      : 'text-sm leading-[0.875rem]';

  const paddingClassName =
    buttonType !== 'neutral-text'
      ? size === 'lg'
        ? 'px-5 py-3'
        : size === 'sm'
        ? 'px-3 py-1.5'
        : 'px-4 py-2'
      : size === 'lg'
      ? 'px-2 py-2'
      : size === 'sm'
      ? 'px-1 py-1'
      : 'px-2 py-2';

  const fontClassName =
    buttonType === 'neutral-text' ? 'font-medium' : 'font-bold';

  const borderClassName = buttonType === 'neutral-outlined' ? 'border' : '';

  const gapClassName = size === 'sm' ? 'gap-1' : size === 'lg' ? 'gap-2' : 'gap-2';

  const loadingColorClassName =
    buttonType === 'primary' ? 'border-on-primary'
    : buttonType === 'danger' ? 'border-on-error'
    : buttonType === 'neutral-outlined' ? 'border-on-surface'
    : buttonType === 'neutral-text' ? 'border-on-surface'
    : 'border-surface';

  const loadingSizeName =
    size === 'sm' ? 'h-3 w-3 border-2'
    : size === 'lg' ? 'h-5 w-5 border-2'
    : 'h-4 w-4 border-2';

  return (
    <button
      type={type}
      className={clsx(
        ['group', 'relative'],
        ['data-[loading=true]:cursor-progress'],
        ['flex', 'items-center', 'justify-center'],
        gapClassName,
        fontClassName,
        paddingClassName,
        shapeClassName,
        borderClassName,
        colorClassName,
        sizeClassName,
        className
      )}
      data-loading={loading}
      disabled={loading}
      {...otherProps}
    >
      <span className="group-data-[loading=true]:invisible">{children}</span>
      <div className={clsx(
        ['hidden', 'group-data-[loading=true]:inline-block'],
        ['absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2'],
      )}>
        <div className="flex justify-center" aria-label="読み込み中">
          <span
            className={clsx(
              ['animate-spin', 'rounded-full', 'border-t-transparent'],
              sizeClassName,
              loadingColorClassName,
              loadingSizeName,
            )}
          />
        </div>
      </div>
    </button>
  );
};
