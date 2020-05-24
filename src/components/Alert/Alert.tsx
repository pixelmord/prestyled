/** @jsx jsx */
import { jsx, Alert as ThemeUiAlert, AlertProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<AlertProps>>) => <ThemeUiAlert {...rest} variant={variant} />;
export default Alert;
