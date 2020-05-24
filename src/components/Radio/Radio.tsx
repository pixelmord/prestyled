/** @jsx jsx */
import { jsx, Radio as ThemeUiRadio, RadioProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Radio: React.FC<RadioProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<RadioProps>>) => <ThemeUiRadio {...rest} variant={variant} />;
export default Radio;
