import styled from '@emotion/styled';
import * as React from 'react';

import { Text, TextProps } from '../Text';

const HeadlineStyled: React.SFC<TextProps> = styled(Text)``;

export const Headline: React.SFC<TextProps> = ({
  as = 'h1',
  textStyle,
  ...rest
}) => {
  const computedTextStyle =
    typeof textStyle !== 'undefined' ? (textStyle as string) : as;
  return <HeadlineStyled as={as} textStyle={computedTextStyle} {...rest} />;
};
