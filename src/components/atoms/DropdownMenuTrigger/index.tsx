import { ReactNode } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { _Content } from './_Content';
import { _Item } from './_Item';

export type DropdownMenuTriggerProps = {
  children: ReactNode;
  menuFactory: (props: {
    Content: typeof _Content, Item: typeof _Item
  }) => ReturnType<typeof _Content>;
};

export const DropdownMenuTrigger = ({
  children,
  menuFactory,
}: DropdownMenuTriggerProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        {menuFactory({
          Content: _Content,
          Item: _Item,
        })}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
