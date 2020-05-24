/** @jsx jsx */
import { jsx, Avatar as ThemeUiAvatar, AvatarProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<AvatarProps>>) => <ThemeUiAvatar {...rest} variant={variant} />;
export default Avatar;
