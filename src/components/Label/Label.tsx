/** @jsx jsx */
import { jsx, Label as ThemeUiLabel, LabelProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Label: React.FC<LabelProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<LabelProps>>) => <ThemeUiLabel {...rest} variant={variant} />;
export default Label;
