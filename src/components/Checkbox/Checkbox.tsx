/** @jsx jsx */
import { jsx, Checkbox as ThemeUiCheckbox, CheckboxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Checkbox: React.FC<CheckboxProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<CheckboxProps>>) => <ThemeUiCheckbox {...rest} variant={variant} />;
export default Checkbox;
