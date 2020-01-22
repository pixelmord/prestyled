import styled, { StyledComponent } from '@emotion/styled';
import { HTMLProps, PropsWithoutRef } from 'react';
import { PrestyledTheme as Theme } from '../../theme/index';

export const Message: StyledComponent<
  PropsWithoutRef<JSX.IntrinsicElements['div']>,
  HTMLProps<HTMLDivElement>,
  Theme
> = styled('div')``;
