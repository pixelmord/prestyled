/** @jsx jsx */
import { jsx, Textarea as ThemeUiTextarea, TextareaProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Textarea: React.FC<TextareaProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<TextareaProps>>) => <ThemeUiTextarea {...rest} variant={variant} />;
export default Textarea;
