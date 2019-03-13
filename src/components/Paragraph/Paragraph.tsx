import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import { themeGet } from 'styled-system';

import { Theme } from '../../theme';
import { Text, TextProps } from '../Text';

export const Paragraph: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  TextProps,
  Theme
> = styled(Text)`
  font-family: ${themeGet('fonts.text', 'sans-serif')};
  line-height: ${themeGet('lineHeights.standard', '1.6')};
  color: ${themeGet('colors.text', 'black')};
`;

Paragraph.defaultProps = {
  mb: 2,
};

export const P = Paragraph;
