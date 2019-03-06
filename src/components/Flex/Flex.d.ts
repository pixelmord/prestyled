import * as React from 'react';
import {
  AlignItemsProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
} from 'styled-system';
import { BoxProps } from '../Box';
export interface FlexProps
  extends BoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}
export declare const Flex: React.SFC<FlexProps>;
