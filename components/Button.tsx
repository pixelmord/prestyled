import * as React from 'react';
import styled from '@emotion/styled';

interface StyledComponentProps {
  primary?: boolean;
  theme?: any;
}

const Button: React.SFC<StyledComponentProps> = styled('button')`
  /* Adapt the colours based on primary prop */
  background: ${(props: StyledComponentProps) =>
    props.primary ? props.theme.colorPrimary : 'white'};
  color: ${(props: StyledComponentProps) => (props.primary ? 'white' : 'red')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

export default Button;
