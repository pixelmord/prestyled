/** @jsx jsx */
import { jsx, NavLink as ThemeUiNavLink, NavLinkProps } from 'theme-ui';
import * as React from 'react';

export const NavLink: React.FC<NavLinkProps> = React.forwardRef(
  ({ variant = 'default', ...rest }: React.PropsWithChildren<NavLinkProps>, ref) => (
    <ThemeUiNavLink ref={ref} {...rest} variant={variant} />
  )
);
export default NavLink;
