import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme/index';

export interface IFormFieldDescriptionProps extends HTMLProps<HTMLDivElement> {}

export const FormFieldDescription: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  IFormFieldDescriptionProps,
  Theme
> = styled('div')``;
