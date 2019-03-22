import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import {
  alignSelf,
  AlignSelfProps,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  borders,
  BordersProps,
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  flex,
  FlexProps,
  order,
  OrderProps,
  space,
  SpaceProps,
  width,
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

export const Box: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IBoxProps,
  Theme
> = styled('div')`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${colorStyle}
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
  ${borderRadius}
`;

Box.displayName = 'Box';
