import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
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
  maxWidth,
  MaxWidthProps,
} from 'styled-system';

import { PrestyledTheme as Theme } from '../../theme/index';

export interface BoxProps
  extends WidthProps,
    MaxWidthProps,
    SpaceProps,
    ColorProps,
    ColorStyleProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    BorderProps,
    BordersProps,
    BorderRadiusProps {}

export const Box: StyledComponent<PropsWithoutRef<JSX.IntrinsicElements['div']>, BoxProps, Theme> = styled('div')`
  box-sizing: border-box;
  ${space}
  ${maxWidth}
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
