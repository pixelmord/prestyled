import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme/index';

export interface IFormFieldMessageProps extends HTMLProps<HTMLDivElement> {}

export const FormFieldMessage: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IFormFieldMessageProps,
  Theme
> = styled('div')``;
