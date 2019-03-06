import * as React from 'react';
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
export declare const Box: React.SFC<BoxProps>;
