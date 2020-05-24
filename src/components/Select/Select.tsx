/** @jsx jsx */
import { jsx, Select as ThemeUiSelect, SelectProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Select: React.FC<SelectProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<SelectProps>>) => <ThemeUiSelect {...rest} variant={variant} />;
export default Select;
