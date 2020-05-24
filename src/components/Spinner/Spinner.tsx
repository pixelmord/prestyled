/** @jsx jsx */
import { jsx, Spinner as ThemeUiSpinner, SpinnerProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Spinner: React.FC<SpinnerProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<SpinnerProps>>) => <ThemeUiSpinner {...rest} variant={variant} />;
export default Spinner;
