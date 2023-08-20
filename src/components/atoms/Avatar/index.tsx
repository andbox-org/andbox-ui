import { FC } from 'react';
import { 
  Root, 
  Image, 
  Fallback, 
  AvatarProps as _AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
 } from '@radix-ui/react-avatar';
import clsx from 'clsx';

export type AvatarProps = _AvatarProps & {
  children: AvatarFallbackProps['children'];
  fallback?: Omit<AvatarFallbackProps, 'children'>;
  image?: AvatarImageProps;
  size?: 'sm' | 'md' | 'lg';
  outlined?: boolean;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ children, image, fallback, size = 'md', outlined, className, ...props }) => {
  return (
    <Root
      {...props}
      className={clsx(
        ['inline-flex', 'items-center', 'justify-center'],
        [
          'rounded-full', 
          size === 'lg' ? 'w-12 h-12' : size === 'sm' ? 'w-6 h-6' : 'w-8 h-8',
        ],
        ['bg-surface-container'],
        [ outlined ? 'border-2 border-surface' : undefined ],
        className,
      )}
    >
      <Image
        {...image}
        className={clsx(
          ['h-full', 'w-full'],
          ['object-cover', 'rounded-full']
        )}
      />
      <Fallback
        {...fallback}
        children={children}
        className={clsx(
          ['h-full', 'w-full'],
          ['flex', 'items-center', 'justify-center'],
          [
            'leading-none',
            size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm',
          ],
        )}
      />
    </Root>
  );
};
