import styled from '@emotion/styled';
import * as React from 'react';
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
import { ComponentProps } from '../../types/Component';

export interface TextProps
  extends ComponentProps,
    ColorProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    FontStyleProps,
    LetterSpacingProps,
    LineHeightProps,
    SpaceProps,
    TextAlignProps,
    TextStyleProps {}

export const Text: React.SFC<TextProps> = styled('div')`
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
