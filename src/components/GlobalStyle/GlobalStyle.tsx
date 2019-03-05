import { Global } from '@emotion/core';
import * as React from 'react';

import { ComponentProps } from '../../types/Component';

export const GlobalStyle: React.SFC<ComponentProps> = () => (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
      },
    }}
  />
);
