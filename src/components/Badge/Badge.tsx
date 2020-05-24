/** @jsx jsx */
import { jsx, Badge as ThemeUiBadge, BadgeProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Badge: React.FC<BadgeProps> = (props: PropsWithoutRef<PropsWithChildren<BadgeProps>>) => (
  <ThemeUiBadge {...props} />
);
export default Badge;
