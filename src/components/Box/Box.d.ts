import { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  AlignSelfProps,
  BorderProps,
  BorderRadiusProps,
  BordersProps,
  ColorProps,
  ColorStyleProps,
  FlexProps,
  OrderProps,
  SpaceProps,
  WidthProps,
} from 'styled-system';
import { Theme } from '../../theme';
export interface IBoxProps
  extends WidthProps,
    SpaceProps,
    ColorProps,
    ColorStyleProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    BorderProps,
    BordersProps,
    BorderRadiusProps {}
export declare const Box: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IBoxProps,
  Theme
>;
