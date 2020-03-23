/** @jsx jsx */
import { PropsWithoutRef } from 'react';
import { jsx, Button as ThemeUiButton } from 'theme-ui';

export type ButtonProps = PropsWithoutRef<JSX.IntrinsicElements['button']>;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <ThemeUiButton {...props} type={props.type || 'button'} />
);
export default Button;
