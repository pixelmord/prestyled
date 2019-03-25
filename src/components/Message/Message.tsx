import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme/index';

export interface IMessageProps extends HTMLProps<HTMLDivElement> {}

export const Message: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IMessageProps,
  Theme
> = styled('div')``;
