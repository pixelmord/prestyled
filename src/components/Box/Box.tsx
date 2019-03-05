import styled from '@emotion/styled';
import * as React from 'react';
import {
  alignSelf,
  AlignSelfProps,
  BorderProps,
  borders,
  BordersProps,
  color,
  ColorProps,
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
    FlexProps,
    OrderProps,
    AlignSelfProps,
    BorderProps,
    BordersProps {}

export const Box: React.SFC<BoxProps> = styled('div')`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
`;
