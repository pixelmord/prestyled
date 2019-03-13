import { Global } from '@emotion/core';
import * as React from 'react';

export const GlobalStyle: React.FC<{}> = () => (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      'html, body': {
        fontFamily:
          'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        margin: 0,
        padding: 0,
      },
    }}
  />
);
