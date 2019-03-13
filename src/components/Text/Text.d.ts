import { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  ColorProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';
import { Theme } from '../../theme';
export interface ITextProps
  extends ColorProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    FontStyleProps,
    LetterSpacingProps,
    LineHeightProps,
    SpaceProps,
    TextAlignProps,
    TextStyleProps {}
export declare const Text: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  ITextProps,
  Theme
>;
