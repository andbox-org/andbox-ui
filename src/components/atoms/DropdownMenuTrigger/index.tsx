import { ReactNode } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { _Content } from './_Content';
import { _Item } from './_Item';
import { _Label } from './_Label';
import { _Separator } from './_Separator';

export type DropdownMenuTriggerProps = {
  children: ReactNode;
  menuFactory: (props: {
    Content: typeof _Content,
    Item: typeof _Item,
    Label: typeof _Label,
    Separator: typeof _Separator,
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
          Label: _Label,
          Separator: _Separator,
        })}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
