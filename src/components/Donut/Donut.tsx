/** @jsx jsx */
import { jsx, Donut as ThemeUiDonut, DonutProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Donut: React.FC<DonutProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<DonutProps>>) => <ThemeUiDonut {...rest} variant={variant} />;
export default Donut;
