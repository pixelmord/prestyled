import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system';

import { Theme } from '../../theme/index';
import { Box, IBoxProps } from '../Box';

export interface IFlexProps
  extends IBoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}

export const Flex: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IFlexProps,
  Theme
> = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;
