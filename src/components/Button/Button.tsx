/** @jsx jsx */
import { jsx, Button as ThemeUiButton, ButtonProps } from 'theme-ui';

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <ThemeUiButton {...props} type={props.type || 'button'} variant={props.variant || 'default'} />
);
export default Button;
