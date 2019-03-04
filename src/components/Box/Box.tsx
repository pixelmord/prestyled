import styled from '@emotion/styled';
import * as React from 'react';
import {
  BorderProps,
  borders,
  BordersProps,
  color,
  ColorProps,
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
    BorderProps,
    BordersProps {}

export const Box: React.SFC<BoxProps> = styled('div')`
  ${space}
  ${width}
  ${color}
  ${borders}
`;
