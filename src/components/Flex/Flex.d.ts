import { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  AlignItemsProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
} from 'styled-system';
import { Theme } from '../../theme';
import { IBoxProps } from '../Box';
export interface IFlexProps
  extends IBoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}
export declare const Flex: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IFlexProps,
  Theme
>;
