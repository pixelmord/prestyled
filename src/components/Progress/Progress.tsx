/** @jsx jsx */
import { jsx, Progress as ThemeUiProgress, ProgressProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Progress: React.FC<ProgressProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<ProgressProps>>) => <ThemeUiProgress {...rest} variant={variant} />;
export default Progress;
