import clsx from 'clsx';
import { ButtonHTMLAttributes, LinkHTMLAttributes, FC } from 'react';
import { IconType } from 'react-icons';

type CommonIconButtonProps = {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg';
  color?: 'neutral' | 'primary';
};

type IconButtonProps = (
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      tag?: 'button';
    })
  | (LinkHTMLAttributes<HTMLAnchorElement> & {
      tag: 'a';
    })
) &
  CommonIconButtonProps;

export const IconButton: FC<IconButtonProps> = ({
  icon,
  size = 'md',
  color = 'neutral',
  className,
  ...props
}) => {
  const Icon = icon;
  const iconClassName = clsx(
    color === 'primary' ? 'text-primary' : 'text-on-surface',
    size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
  );
  const wrapperClassName = clsx(
    'p-1',
    'rounded-full',
    color === 'primary' ? 'hover:bg-primary/10' : 'hover:bg-on-surface/10',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-outline-variant',
    'disabled:opacity-50',
    'disabled:bg-transparent',
    'disabled:cursor-not-allowed',
    className,
  );

  if (props.tag === 'a') {
    return (
      <a className={wrapperClassName} {...props}>
        <Icon className={iconClassName} />
      </a>
    );
  }

  // tag = button
  return (
    <button className={wrapperClassName} {...props}>
      <Icon className={iconClassName} />
    </button>
  );
};
