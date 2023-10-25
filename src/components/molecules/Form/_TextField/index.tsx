import { forwardRef } from 'react';

import { Input, InputProps } from '../../../atoms/Input';
import { CommonFieldWrapper, CommonFieldWrapperProps } from '../_CommonFieldWrapper';

export type TextFieldProps = Omit<InputProps, 'error'> & Omit<CommonFieldWrapperProps, 'children'>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  label,
  supportSlot,
  errorSlot,
  className,
  disabled,
  sideButton,
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
      <Input className="grow" {...props} ref={ref} error={error} disabled={disabled} />
    </CommonFieldWrapper>
  );
});
