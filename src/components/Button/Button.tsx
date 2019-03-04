import styled from '@emotion/styled';
import * as React from 'react';
import { ComponentProps } from '../../types/Component';

export interface Props extends ComponentProps {
  /** Button display type. */
  displayType?: 'primary' | 'secondary';
}

export const Button: React.SFC<Props> = styled('button')`
  /* Adapt the colours based on primary prop */
  background: ${(props: Props) =>
    props.displayType === 'primary' ? props.theme.colorPrimary : 'white'};
  color: ${(props: Props) =>
    props.displayType === 'primary' ? 'white' : 'red'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;
