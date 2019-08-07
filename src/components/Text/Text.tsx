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
} from 'styled-system';

import { themeGet } from '@styled-system/theme-get';

import { Theme } from '../../theme/index';

export interface TextProps
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

export const Text: StyledComponent<PropsWithoutRef<JSX.IntrinsicElements['div']>, TextProps, Theme> = styled('div')`
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
