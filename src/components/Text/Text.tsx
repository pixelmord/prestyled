/** @jsx jsx */
import { jsx, Text as ThemeUiText, TextProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
export const Text: React.FC<TextProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<TextProps>>) => <ThemeUiText {...rest} variant={variant} />;
export default Text;
