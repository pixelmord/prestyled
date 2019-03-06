import * as React from 'react';
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
export declare const Text: React.SFC<TextProps>;
