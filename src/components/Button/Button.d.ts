import { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  ButtonStyleProps,
  FontSizeProps,
  FontWeightProps,
} from 'styled-system';
import { Theme } from '../../theme';
import { IBoxProps } from '../Box';
export interface IButtonProps
  extends IBoxProps,
    ButtonStyleProps,
    FontSizeProps,
    FontWeightProps {}
export declare const Button: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['button']>,
  IButtonProps,
  Theme
>;
