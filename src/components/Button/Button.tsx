/** @jsx jsx */
import { jsx, Button as ThemeUiButton, ButtonProps } from 'theme-ui';

export const Button: React.FC<ButtonProps> = ({ variant = 'default', type = 'button', ...rest }: ButtonProps) => (
  <ThemeUiButton {...rest} type={type} variant={variant} />
);
export default Button;
