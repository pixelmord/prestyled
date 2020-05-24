/** @jsx jsx */
import { jsx, Slider as ThemeUiSlider, SliderProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Slider: React.FC<SliderProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<SliderProps>>) => <ThemeUiSlider {...rest} variant={variant} />;
export default Slider;
