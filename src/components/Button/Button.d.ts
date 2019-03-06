import * as React from 'react';
import {
  ButtonStyleProps,
  FontSizeProps,
  FontWeightProps,
} from 'styled-system';
import { ComponentProps } from '../../types/Component';
import { BoxProps } from '../Box';
export interface ButtonProps
  extends ComponentProps,
    BoxProps,
    ButtonStyleProps,
    FontSizeProps,
    FontWeightProps {}
export declare const Button: React.SFC<ButtonProps>;
