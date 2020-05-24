/** @jsx jsx */
import { jsx, Divider as ThemeUiDivider, DividerProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Divider: React.FC<DividerProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<DividerProps>>) => <ThemeUiDivider {...rest} variant={variant} />;
export default Divider;
