/** @jsx jsx */
import { jsx, MenuButton as ThemeUiMenuButton, MenuButtonProps } from 'theme-ui';

export const MenuButton: React.FC<MenuButtonProps> = ({ variant = 'theme.buttons.menu', ...rest }: MenuButtonProps) => (
  <ThemeUiMenuButton {...rest} variant={variant} />
);
export default MenuButton;
