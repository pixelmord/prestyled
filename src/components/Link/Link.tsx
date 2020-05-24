/** @jsx jsx */
import { jsx, Link as ThemeUiLink, LinkProps } from 'theme-ui';

export const Link: React.FC<LinkProps> = ({ variant = 'default', ...rest }: React.PropsWithChildren<LinkProps>) => (
  <ThemeUiLink {...rest} variant={variant} />
);
export default Link;
