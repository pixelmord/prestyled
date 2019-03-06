import styled from '@emotion/styled';
import * as React from 'react';
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

import { ComponentProps } from '../../types/Component';

export interface BoxProps
  extends ComponentProps,
    WidthProps,
    SpaceProps,
    ColorProps,
    ColorStyleProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    BorderProps,
    BordersProps,
    BorderRadiusProps {}

export const Box: React.SFC<BoxProps> = styled('div')`
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
