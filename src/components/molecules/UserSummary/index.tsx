import clsx from 'clsx';
import { Avatar, AvatarProps } from '../../atoms/Avatar';
import { Badge } from '../../atoms/Badge';

export type UserSummaryProps = {
  fallback?: AvatarProps['children'];
  image?: AvatarProps['image'];
  name: string;
  email?: string;
  badgeLabel?: string;
  size?: 'sm' | 'md';
};

export const UserSummary = ({
  fallback,
  image,
  name,
  email,
  badgeLabel,
  size = 'md',
}: UserSummaryProps) => {
  return (
    <div className={clsx('flex items-center', size === 'sm' ? 'gap-1.5' : 'gap-2.5')}>
      <Avatar size={size === 'sm' ? 'md' : 'lg'} image={image}>
        {fallback}
      </Avatar>
      <div className={clsx('flex', size === 'sm' ? 'items-center gap-1.5' : 'flex-col gap-1')}>
        <div className={clsx('flex', size === 'sm' ? 'gap-1.5' : 'gap-2')}>
          <div className={clsx('text-on-surface', size === 'sm' ? 'text-sm font-medium' : 'text-base font-bold')}>
            {name}
          </div>
          {badgeLabel && <Badge>{badgeLabel}</Badge>}
        </div>
        <div className="text-xs text-on-surface">{email}</div>
      </div>
    </div>
  );
};
