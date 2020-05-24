/** @jsx jsx */
import { jsx, IconButton as ThemeUiIconButton, IconButtonProps } from 'theme-ui';
import { PropsWithChildren } from 'react';

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'theme.buttons.icon',
  ...rest
}: PropsWithChildren<IconButtonProps>) => <ThemeUiIconButton {...rest} variant={variant} />;
export default IconButton;
