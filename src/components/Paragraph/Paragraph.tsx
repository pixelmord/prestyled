import styled from '@emotion/styled';
import * as React from 'react';

import { Text, TextProps } from '../Text';

export const Paragraph: React.SFC<TextProps> = styled(Text)``;

Paragraph.defaultProps = {
  mb: 2,
};
