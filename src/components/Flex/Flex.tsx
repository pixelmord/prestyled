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
import { Box, BoxProps } from '../Box';

export interface FlexProps extends BoxProps, FlexWrapProps, FlexDirectionProps, AlignItemsProps, JustifyContentProps {}

export const Flex: StyledComponent<PropsWithoutRef<JSX.IntrinsicElements['div']>, FlexProps, Theme> = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;
