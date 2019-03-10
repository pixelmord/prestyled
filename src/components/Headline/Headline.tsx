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

export const H1 = Headline;

export const H2: React.SFC<TextProps> = props => {
  delete props.as;
  return <Headline as={'h2'} {...props} />;
};
export const H3: React.SFC<TextProps> = props => {
  delete props.as;
  return <Headline as={'h3'} {...props} />;
};
export const H4: React.SFC<TextProps> = props => {
  delete props.as;
  return <Headline as={'h4'} {...props} />;
};
export const H5: React.SFC<TextProps> = props => {
  delete props.as;
  return <Headline as={'h5'} {...props} />;
};
export const H6: React.SFC<TextProps> = props => {
  delete props.as;
  return <Headline as={'h6'} {...props} />;
};
