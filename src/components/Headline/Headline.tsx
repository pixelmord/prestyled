import styled, { StyledComponent } from '@emotion/styled';
import * as React from 'react';

import { Theme } from '../../theme/index';
import { TextProps, Text } from '../Text/index';
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadlineProps extends React.PropsWithoutRef<JSX.IntrinsicElements['h1']> {
  as?: As;
}

const HeadlineStyled: StyledComponent<HeadlineProps, TextProps, Theme> = styled(Text)``;

type HeadlineComponentProps = HeadlineProps & TextProps & { theme?: Theme; textStyle?: string };

export const Headline: React.FC<HeadlineComponentProps> = ({
  as = 'h1',
  textStyle,
  ...rest
}: HeadlineComponentProps): React.ReactElement => {
  const computedTextStyle = typeof textStyle !== 'undefined' ? (textStyle as string) : as;
  return <HeadlineStyled as={as} textStyle={computedTextStyle} {...rest} />;
};

export const H1 = Headline;

export const H2: React.FC<HeadlineComponentProps> = (props: HeadlineComponentProps): React.ReactElement => {
  delete props.as;
  return <Headline as={'h2'} {...props} />;
};
export const H3: React.FC<HeadlineComponentProps> = (props: HeadlineComponentProps): React.ReactElement => {
  delete props.as;
  return <Headline as={'h3'} {...props} />;
};
export const H4: React.FC<HeadlineComponentProps> = (props: HeadlineComponentProps): React.ReactElement => {
  delete props.as;
  return <Headline as={'h4'} {...props} />;
};
export const H5: React.FC<HeadlineComponentProps> = (props: HeadlineComponentProps): React.ReactElement => {
  delete props.as;
  return <Headline as={'h5'} {...props} />;
};
export const H6: React.FC<HeadlineComponentProps> = (props: HeadlineComponentProps): React.ReactElement => {
  delete props.as;
  return <Headline as={'h6'} {...props} />;
};
