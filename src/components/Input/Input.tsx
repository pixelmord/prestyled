/** @jsx jsx */
import { jsx, Input as ThemeUiInput, InputProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<InputProps>>) => <ThemeUiInput {...rest} variant={variant} />;
export default Input;
