/** @jsx jsx */
import { jsx, Close as ThemeUiClose, IconButtonProps } from 'theme-ui';

export const Close: React.FC<IconButtonProps> = ({ variant = 'theme.buttons.close', ...rest }: IconButtonProps) => (
  <ThemeUiClose {...rest} variant={variant} />
);
export { Close as default, Close as CloseButton };
