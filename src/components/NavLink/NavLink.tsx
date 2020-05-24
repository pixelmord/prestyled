/** @jsx jsx */
import { jsx, NavLink as ThemeUiNavLink, NavLinkProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const NavLink: React.FC<NavLinkProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<NavLinkProps>>) => <ThemeUiNavLink {...rest} variant={variant} />;
export default NavLink;
