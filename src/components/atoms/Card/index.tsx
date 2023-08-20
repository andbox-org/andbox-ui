import clsx from 'clsx';
import { ButtonHTMLAttributes, HTMLAttributes, LinkHTMLAttributes, ReactNode } from 'react';

type CommonCardProps = {
  children: ReactNode;
  className?: string;
};

type DivCardProps = HTMLAttributes<HTMLDivElement> & CommonCardProps & {
  tag?: 'div';
  actionLabel?: null;
};

type LinkCardProps = LinkHTMLAttributes<HTMLAnchorElement> & CommonCardProps & {
  tag: 'a';
  actionLabel?: string;
};

type ButtonCardProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonCardProps & {
  tag: 'button';
  actionLabel?: string;
};

export type CardProps = 
  | DivCardProps
  | LinkCardProps
  | ButtonCardProps;

export const Card = ({ actionLabel, children, className, ...props }: CardProps) => {
  const wrapperClassName = clsx(
    ['group'],
    ['flex flex-col gap-3'],
    ['px-4', 'py-3'],
    ['rounded-xl', 'border', 'border-outline-variant'],
    ['bg-surface'],
    ['shadow-sm'],
    [props.tag === 'a' || props.tag === 'button' ? 'hover:shadow-md hover:cursor-pointer' : undefined],
    ['focus:outline-none', 'focus:ring-1', 'focus:ring-outline'],
    ['disabled:opacity-50', 'disabled:bg-transparent', 'disabled:cursor-not-allowed', 'disabled:shadow-none'],
    className,
  );

  const action = (actionLabel && <div className="text-sm text-primary font-medium group-hover:underline group-disabled:no-underline">{actionLabel}</div>);

  if (props.tag === 'a') {
    return (
      <a {...props} className={wrapperClassName}>
        {children}
        {action}
      </a>
    );
  }

  if (props.tag === 'button') {
    return (
      <button {...props} className={wrapperClassName}>
        {children}
        {action}
      </button>
    );
  }

  // tag = div
  return (
    <div {...props} className={wrapperClassName}>
      {children}
    </div>
  );
};
