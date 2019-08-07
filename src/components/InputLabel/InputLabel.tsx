import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { Theme } from '../../theme/index';

export const InputLabel: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['label']>,
  HTMLProps<HTMLLabelElement>,
  Theme
> = styled('label')``;
