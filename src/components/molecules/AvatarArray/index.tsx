import clsx from 'clsx';
import { FC } from 'react';

import { Avatar, AvatarProps } from '../../atoms/Avatar';

export type AvatarArrayProps = {
  avatars: Omit<AvatarProps, 'className' | 'size' | 'outlined'>[];
  size?: AvatarProps['size'];
  className?: string;
};

export const AvatarArray: FC<AvatarArrayProps> = ({
  avatars,
  size = 'md',
  className,
}) => {
  return (
    <div className={clsx('flex', className)}>
      {avatars.map((avatar, index) => (
        <Avatar 
          key={index} 
          {...avatar} 
          size={size}
          className={clsx('-ml-2', 'first:ml-0')}
          outlined
        />
      ))}
    </div>
  );
}
