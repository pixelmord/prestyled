import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import {
  color,
  ColorProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  themeGet,
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

export const Text: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  ITextProps,
  Theme
> = styled('div')`
  font-family: ${themeGet('fonts.text', 'sans-serif')};
  line-height: ${themeGet('lineHeights.standard', '1.6')};
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${color}
  ${textAlign}
  ${textStyle}
`;
