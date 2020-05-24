/** @jsx jsx */
import { jsx, Image as ThemeUiImage, ImageProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Image: React.FC<ImageProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<ImageProps>>) => <ThemeUiImage {...rest} variant={variant} />;
export default Image;
