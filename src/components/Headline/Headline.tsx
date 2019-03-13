import styled, { StyledComponent } from '@emotion/styled';
import React, { FC, PropsWithoutRef } from 'react';

import { Theme } from '../../theme';
import { Text, TextProps } from '../Text';

interface IHeadlineProps extends PropsWithoutRef<JSX.IntrinsicElements['h1']> {
  as: string;
}

const HeadlineStyled: StyledComponent<
  IHeadlineProps,
  TextProps,
  Theme
> = styled(Text)``;

export const Headline: FC<IHeadlineProps & TextProps & Theme> = ({
  as = 'h1',
  textStyle,
  ...rest
}) => {
  const computedTextStyle =
    typeof textStyle !== 'undefined' ? (textStyle as string) : as;
  return <HeadlineStyled as={as} textStyle={computedTextStyle} {...rest} />;
};

export const H1 = Headline;

export const H2: FC<IHeadlineProps & TextProps & Theme> = props => {
  delete props.as;
  return <Headline as={'h2'} {...props} />;
};
export const H3: FC<IHeadlineProps & TextProps & Theme> = props => {
  delete props.as;
  return <Headline as={'h3'} {...props} />;
};
export const H4: FC<IHeadlineProps & TextProps & Theme> = props => {
  delete props.as;
  return <Headline as={'h4'} {...props} />;
};
export const H5: FC<IHeadlineProps & TextProps & Theme> = props => {
  delete props.as;
  return <Headline as={'h5'} {...props} />;
};
export const H6: FC<IHeadlineProps & TextProps & Theme> = props => {
  delete props.as;
  return <Headline as={'h6'} {...props} />;
};
