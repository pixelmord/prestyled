/** @jsx jsx */
import { jsx, Text as ThemeUiText, TextProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
export const Text: React.FC<TextProps> = ({ variant, ...rest }: PropsWithoutRef<PropsWithChildren<TextProps>>) => (
  <ThemeUiText {...rest} variant={variant || 'default'} />
);
export default Text;
