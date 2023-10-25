import { forwardRef } from 'react';

import { Select, SelectRootProps } from '../../../atoms/Select';
import { CommonFieldWrapper, CommonFieldWrapperProps } from '../_CommonFieldWrapper';

export type SelectFieldProps = Omit<SelectRootProps, 'error'> & CommonFieldWrapperProps;

const Root = forwardRef<HTMLSelectElement, SelectFieldProps>(({
  label,
  supportSlot,
  errorSlot,
  className,
  disabled,
  sideButton,
  children,
  ...props
}, ref) => {
  const error = !!errorSlot;
  return (
    <CommonFieldWrapper
      label={label}
      supportSlot={supportSlot}
      errorSlot={errorSlot}
      className={className}
      disabled={disabled}
      sideButton={sideButton}
    >
      <Select.Root className="grow" {...props} ref={ref} error={error} disabled={disabled}>
        {children}
      </Select.Root>
    </CommonFieldWrapper>
  );
});

export const SelectField = {
  Root,
  Option: Select.Option,
  OptionGroup: Select.OptionGroup,
};
