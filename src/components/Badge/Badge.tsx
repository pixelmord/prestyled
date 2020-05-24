/** @jsx jsx */
import { jsx, Badge as ThemeUiBadge, BadgeProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<BadgeProps>>) => <ThemeUiBadge {...rest} variant={variant} />;
export default Badge;
