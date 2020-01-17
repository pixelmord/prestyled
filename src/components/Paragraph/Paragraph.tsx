import styled, { StyledComponent } from '@emotion/styled';
import { PropsWithoutRef } from 'react';
import { themeGet } from '@styled-system/theme-get';

import { Theme } from '../../theme/index';
import { TextProps, Text } from '../Text/index';

export const Paragraph: StyledComponent<PropsWithoutRef<JSX.IntrinsicElements['p']>, TextProps, Theme> = styled(Text)`
  font-family: ${themeGet('fonts.text', 'sans-serif')};
  line-height: ${themeGet('lineHeights.standard', '1.6')};
  color: ${themeGet('colors.text', 'black')};
`.withComponent('p');

Paragraph.defaultProps = {
  mb: 2,
};

export const P = Paragraph;
