import styled, { StyledComponent } from '@emotion/styled';
import * as React from 'react';

import { Theme } from '../../theme/index';
import { ITextProps, Text } from '../Text';

interface IHeadlineProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['h1']> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const HeadlineStyled: StyledComponent<
  IHeadlineProps,
  ITextProps,
  Theme
> = styled(Text)``;

export const Headline: React.FC<
  IHeadlineProps & ITextProps & { theme?: Theme }
> = ({ as = 'h1', textStyle, ...rest }) => {
  const computedTextStyle =
    typeof textStyle !== 'undefined' ? (textStyle as string) : as;
  return <HeadlineStyled as={as} textStyle={computedTextStyle} {...rest} />;
};

export const H1 = Headline;

export const H2: React.FC<
  IHeadlineProps & ITextProps & { theme?: Theme }
> = props => {
  delete props.as;
  return <Headline as={'h2'} {...props} />;
};
export const H3: React.FC<
  IHeadlineProps & ITextProps & { theme?: Theme }
> = props => {
  delete props.as;
  return <Headline as={'h3'} {...props} />;
};
export const H4: React.FC<
  IHeadlineProps & ITextProps & { theme?: Theme }
> = props => {
  delete props.as;
  return <Headline as={'h4'} {...props} />;
};
export const H5: React.FC<
  IHeadlineProps & ITextProps & { theme?: Theme }
> = props => {
  delete props.as;
  return <Headline as={'h5'} {...props} />;
};
export const H6: React.FC<
  IHeadlineProps & ITextProps & { theme?: Theme }
> = props => {
  delete props.as;
  return <Headline as={'h6'} {...props} />;
};
