/** @jsx jsx */
import { jsx, Embed as ThemeUiEmbed, EmbedProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Embed: React.FC<EmbedProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<EmbedProps>>) => <ThemeUiEmbed {...rest} variant={variant} />;
export default Embed;
