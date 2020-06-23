/** @jsx jsx */
import { jsx, Link as ThemeUiLink, LinkProps } from 'theme-ui';
import * as React from 'react';

export const Link: React.FC<LinkProps> = React.forwardRef(
  ({ variant = 'default', ...rest }: React.PropsWithChildren<LinkProps>, ref) => (
    <ThemeUiLink ref={ref} {...rest} variant={variant} />
  )
);
export default Link;
