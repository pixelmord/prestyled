import styled from '@emotion/styled';
import * as React from 'react';
import { themeGet } from 'styled-system';
import { Text, TextProps } from '../Text';

export const Paragraph: React.SFC<TextProps> = styled(Text)`
  font-family: ${themeGet('fonts.text', 'sans-serif')};
  line-height: ${themeGet('lineHeights.standard', '1.6')};
  color: ${themeGet('colors.text', 'black')};
`;

Paragraph.defaultProps = {
  mb: 2,
};

export const P = Paragraph;
